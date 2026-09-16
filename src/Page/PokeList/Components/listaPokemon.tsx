import React  from 'react'
import { Link } from 'react-router-dom'
import getIndex from '../../../scripts/getIndex'
import pokemomLista from '../types'
import './../index.css';
import PokeImage from '../../../components/Image/PokeImage';

const ListaPokemon: React.FC<{listaPoke: pokemomLista[]}> = ({listaPoke}) => {


    return (
        <div className='box-container'>
        {listaPoke && listaPoke?.map((i, index)=>


        
        <div key={i.name} className='box-card'>
                <Link to={`./${getIndex(i.url)}`}>
                    <div className='image-card'>
                        <PokeImage weight='mini' pokemonId={Number(getIndex(i.url, true))} />
                    
                    </div>

        <p className='name-card' ><span>{`#${getIndex(i.url)}`}</span>{i.name}</p>
        </Link>
        </div>
  
   
            )}
        </div>

    )
}
export default ListaPokemon
