import React, { useEffect, useState } from 'react'
import ListaPokemon from './Components/listaPokemon'
import pokemomLista from './types'

const PokeList: React.FC = () => {

    const [listaPoke, setListaPoke ] = useState<pokemomLista[]>()
    useEffect(() => {
//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
        fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151").then(response =>{
            return response.json();
              }).then(data =>
              {
                setListaPoke(data.results)
          })

    }, [])
    return (
        <>   
        <ListaPokemon listaPoke={listaPoke!}/>
        </>

    )
}
export default PokeList