import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getIndex from '../../../scripts/getIndex'
import pokemomLista from '../types'
import './../index.css';
import PokeImage from '../../../components/Image/PokeImage';
import { useAuth } from '../../../context/AuthContext'

const ListaPokemon: React.FC<{listaPoke: pokemomLista[], detailBasePath?: string, isShared?: boolean}> = ({listaPoke, detailBasePath = './', isShared= false}) => {
    const { user, isCaptured, toggleCaptured } = useAuth()
    const [busyId, setBusyId] = useState<number | null>(null)

    const handleCapture = async (event: React.MouseEvent<HTMLButtonElement>, pokemonId: number) => {
        event.preventDefault()
        event.stopPropagation()
        if (!user) return

        setBusyId(pokemonId)
        try {
            await toggleCaptured(pokemonId)
        } finally {
            setBusyId(null)
        }
    }

    return (
        <div className='box-container'>
        {listaPoke && listaPoke?.map((i, index)=>


        
        <div key={i.name} className={`box-card ${isCaptured(Number(getIndex(i.url, true))) ? 'is-captured' : ''}`}>
                <Link to={`${detailBasePath}${getIndex(i.url)}`}>
                    <div className='image-card'>
                        <PokeImage weight='mini' pokemonId={Number(getIndex(i.url, true))} />
                    
                    </div>

        <p className='name-card' ><span>{`#${getIndex(i.url)}`}</span>{i.name}</p>
        </Link>
                {user && isShared === false && <button
                    className="capture-list-button"
                    disabled={busyId === Number(getIndex(i.url, true))}
                    onClick={event => handleCapture(event, Number(getIndex(i.url, true)))}
                    type="button"
                >
                    {busyId === Number(getIndex(i.url, true)) ? 'ATUALIZANDO...' : isCaptured(Number(getIndex(i.url, true))) ? 'SOLTAR' : 'CAPTURAR'}
                </button>}
        </div>
  
   
            )}
        </div>

    )
}
export default ListaPokemon
