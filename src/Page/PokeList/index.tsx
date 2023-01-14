import React, { useEffect, useState } from 'react'
import ListaPokemon from './Components/listaPokemon'
import pokemomLista from './types'
import './index.css';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const PokeList: React.FC = () => {

    const [listaPoke, setListaPoke] = useState<pokemomLista[]>()
    const [listaPokeFilter, setListaPokeFilter] = useState<pokemomLista[]>()
    const [gen, setGen] = useState<number>(1)

    useEffect(() => {
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
        })
    }, [gen])

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
    <MenuItem value={1}>1 Geração</MenuItem>
    <MenuItem value={2}>2 Geração</MenuItem>
    <MenuItem value={3}>3 Geração</MenuItem>
    <MenuItem value={4}>4 Geração</MenuItem>
    <MenuItem value={5}>5 Geração</MenuItem>
    <MenuItem value={6}>6 Geração</MenuItem>
    <MenuItem value={7}>7 Geração</MenuItem>
    <MenuItem value={8}>8 Geração</MenuItem>
  </Select>
  </div>
            </div>
            <div>
                <ListaPokemon listaPoke={listaPokeFilter!} />
            </div>

        </>

    )
}
export default PokeList