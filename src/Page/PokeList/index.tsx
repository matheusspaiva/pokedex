import React, { useEffect, useState } from 'react'
import ListaPokemon from './Components/listaPokemon'
import pokemomLista from './types'
import './index.css';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pulse from '../../components/Loader/Pulse';
import { Button, Menu } from '@mui/material';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../components/Modal/useModal';

const PokeList: React.FC = () => {

    const [listaPoke, setListaPoke] = useState<pokemomLista[]>()
    const [berries, setBerry] = useState<pokemomLista[]>([])
    const [items, setItems] = useState<pokemomLista[]>([])
    const [listaPokeFilter, setListaPokeFilter] = useState<pokemomLista[]>()
    const [gen, setGen] = useState<number>(1)
    const [load, setLoad] = useState<boolean>(true)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const { isShown, toggle, setIsShown } = useModal();

    useEffect(() => {
        setLoad(true)
        let valueUrl = ''
        if (gen === 1) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
        if (gen === 2) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=151&limit=100'
        if (gen === 3) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=251&limit=135'
        if (gen === 4) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=386&limit=107'
        if (gen === 5) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=493&limit=156'
        if (gen === 6) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=649&limit=72'
        if (gen === 7) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=721&limit=88'
        if (gen === 8) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=809&limit=95'
        if (gen === 9) valueUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=905&limit=101'

        //https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
        fetch(valueUrl).then(response => {
            return response.json();
        }).then(data => {
            setListaPokeFilter(data.results)
            setListaPoke(data.results)
            setLoad(false)
        })
    }, [gen, setLoad])

    function handleSearchName(value: string) {

        if (value.length === 0) setListaPokeFilter(listaPoke)
        else setListaPokeFilter(listaPoke?.filter(x => x.name.toUpperCase().includes(value.toUpperCase())))

    }

    function showBerris() {
        setItems([])
        fetch("https://pokeapi.co/api/v2/berry/?offset=0&limit=100").then(response => {
            return response.json();
        }).then(data => {
            setBerry(data.results)

        })
        setAnchorEl(null);
        setIsShown(true)
    }

    function showItems() {
        setBerry([])

        //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png
        fetch("https://pokeapi.co/api/v2/item/?offset=0&limit=1000").then(response => {
            return response.json();
        }).then(data => {
            setItems(data.results)

        })
        setAnchorEl(null);
        setIsShown(true)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleName = (name : string) => {
        console.log('oi')
        const doc = document.getElementById(name)
        if(doc)doc.style.display = 'none'
    };

    return (
        <>

            <Modal isShown={isShown && items.length > 0} hide={toggle} modalContent={<>
                <div className='box-fruit'>
                    {items && items?.map((i, index) =>
                        <div  id={`${i.name}`} key={index} className='fruit'>
                            <img  onError={()=>handleName(i.name) } alt={i.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${i.name}.png`} />
                            <p>{i.name}</p>
                        </div>

                    )}
                </div>

            </>} headerText={"ITEMS"} />

            <Modal isShown={isShown && berries.length > 0} hide={toggle} modalContent={<>
                <div className='box-fruit'>
                    {berries && berries?.map((i, index) =>
                        <div className='fruit'>
                            <img alt={i.name} src={`https://www.serebii.net/itemdex/sprites/pgl/${i.name}berry.png`} />
                            <p>{i.name} Berry</p>
                        </div>

                    )}
                </div>

            </>} headerText={"Berries"} />

            <div className='header'>
                <div className='span'>
                    <TextField id="outlined-basic" onChange={(e) => handleSearchName(e.target.value)} label="PESQUISAR ..." variant="filled" />
                </div>
                <div>
                    <Select id="demo-simple-select" value={gen} onChange={(e) => setGen(Number(e.target.value))}>
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
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Extras
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={showBerris}>Berries</MenuItem>
                        <MenuItem onClick={showItems}>Items</MenuItem>
                    </Menu>
                </div>
            </div>
            <div>
                {load && <Pulse />}
                {!load && <ListaPokemon listaPoke={listaPokeFilter!} />}

            </div>

        </>

    )
}
export default PokeList