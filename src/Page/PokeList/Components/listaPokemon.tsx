import React  from 'react'
import { Link } from 'react-router-dom'
import getIndex from '../../../scripts/getIndex'
import pokemomLista from '../types'
import './../index.css';

const ListaPokemon: React.FC<{listaPoke: pokemomLista[]}> = ({listaPoke}) => {


    return (
        <div className='box-container'>    
        {listaPoke && listaPoke?.map((i, index)=>


        
        <div key={i.name} className='box-card'>
                <Link to={`./${getIndex(i.url)}`}>
                    <div className='image-card'>
                    <img alt={`${i.name}`} width={200}  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIndex(i.url, true)}.png`} title={i.name}></img>
                    </div>

        <p className='name-card' >{`#${getIndex(i.url)} ${i.name}`}</p>     
        </Link>
        </div>
  
   
            )}
        </div>

    )
}
export default ListaPokemon