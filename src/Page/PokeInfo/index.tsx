import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageInfo from './components/ImageInfo'
import Informations from './components/Informations'
import SectionInfo from './components/selectTypes'
import PokeInfo from './types'
import './index.css';

const PokeInforamacoes: React.FC = () => {

    const [info, setInfo ] = useState<PokeInfo>()
    const [img, setImg ] = useState<string[]>([])
    const {id} = useParams<string>()

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>{
            return response.json();
              }).then((data : PokeInfo) =>
              {

                setInfo(data)
                const images = [data.sprites.back_default, data.sprites.back_female ,data.sprites.back_shiny, data.sprites.back_shiny_female
                ,data.sprites.front_default, data.sprites.front_female ,data.sprites.front_shiny, data.sprites.front_shiny_female] 


                setImg(images?.filter(x=> x !== null && x.length>0))
                console.log(images?.filter(x=> x !== null && x.length>0))
          })

    }, [id, setImg])
    return (

        <>
        {info && <div className='container'>
            <div className='box'> 
         <div className='title-card'>{info?.name}</div>
             <ImageInfo numero={id} images={img} />
             <SectionInfo tipos={info?.types!}/>
             <Informations info={info!}/>
             </div>
         </div>}
        </>
    )
}
export default PokeInforamacoes