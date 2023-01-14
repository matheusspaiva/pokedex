import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageInfo from './components/ImageInfo'
import Informations from './components/Informations'
import SectionInfo from './components/selectTypes'
import PokeInfo from './types'
import './index.css';

const PokeInforamacoes: React.FC = () => {

    const [info, setInfo ] = useState<PokeInfo>()

    const {id} = useParams<string>()
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>{
            return response.json();
              }).then(data =>
              {

                setInfo(data)
          })

    }, [id])
    return (

        <>
        {info && <div className='container'>
            <div className='box'> 
         <div className='bodyCard'>{info?.name}</div>
             <ImageInfo numero={id} />
             <SectionInfo tipos={info?.types!}/>
             <Informations info={info!}/>
             </div>
         </div>}
        </>
    )
}
export default PokeInforamacoes