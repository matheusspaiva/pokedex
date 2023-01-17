import React, { useEffect, useState } from 'react'
import ListaPokemon from './Components/listaPokemon'
import pokemomLista from './types'
import './index.css';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pulse from '../../components/Loader/Pulse';

const PokeList: React.FC = () => {

    const [listaPoke, setListaPoke] = useState<pokemomLista[]>()
    const [listaPokeFilter, setListaPokeFilter] = useState<pokemomLista[]>()
    const [gen, setGen] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(true)

    useEffect(() => {
        setLoad(true)
        let valueUrl = ''
        if(gen===1) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
        if(gen===2) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'
        if(gen===3) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135'
        if(gen===4) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'
        if(gen===5) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156'
        if(gen===6) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72'
        if(gen===7) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88'
        if(gen===8) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=809&limit=95'
        if(gen===9) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=905&limit=101'

        //https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
        fetch(valueUrl).then(response => {
            return response.json();
        }).then(data => {
            setListaPokeFilter(data.results)
            setListaPoke(data.results)
            setLoad(false)
        })
    }, [gen, setLoad])

    function handleSearchName(value: string){

        if(value.length===0)setListaPokeFilter(listaPoke)
        else setListaPokeFilter(listaPoke?.filter(x=> x.name.toUpperCase().includes(value.toUpperCase())))
            
    }

    return (
        <>
            <div className='header'>
            <div className='span'> 
            <TextField id="outlined-basic" onChange={(e) => handleSearchName(e.target.value)}  label="PESQUISAR ..." variant="filled" />
            </div>
            <div>
            <Select  id="demo-simple-select" value={gen}  onChange={(e) => setGen(Number(e.target.value))}>
                <MenuItem value={1}>1ª Geração - Kanto</MenuItem>
                <MenuItem value={2}>2ª Geração - Johto</MenuItem>
                <MenuItem value={3}>3ª Geração - Hoenn</MenuItem>
                <MenuItem value={4}>4ª Geração - Sinnoh</MenuItem>
                <MenuItem value={5}>5ª Geração - Unova</MenuItem>
                <MenuItem value={6}>6ª Geração - Kalos</MenuItem>
                <MenuItem value={7}>7ª Geração - Alola</MenuItem>
                <MenuItem value={8}>8ª Geração - Galar</MenuItem>
            </Select>
  </div>
            </div>
            <div>
           {load && <Pulse/>}
               {!load && <ListaPokemon listaPoke={listaPokeFilter!} />}

            </div>

        </>

    )
}
export default PokeList