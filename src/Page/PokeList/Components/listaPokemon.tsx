import React  from 'react'
import { Link } from 'react-router-dom'
import getIndex from '../../../scripts/getIndex'
import pokemomLista from '../types'

const ListaPokemon: React.FC<{listaPoke: pokemomLista[]}> = ({listaPoke}) => {


    return (
        <div style={{display: "flex", flexWrap:"wrap", alignContent:"center"}}>    
        {listaPoke && listaPoke?.map(i=>


        
        <div style={{border: "2px solid red", padding:"10px", margin:"10px", borderRadius:"10px"}}>
                <Link to={`./${getIndex(i.url)}`}>
        <img alt={`${i.name}`} width={200}  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIndex(i.url, true)}.png`} title={i.name}></img>
        <p style={{textAlign:"center"}}>{`#${getIndex(i.url)} ${i.name}`}</p>     
        </Link>
        </div>
  
   
            )}
        </div>

    )
}
export default ListaPokemon