import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ImageInfo from './components/ImageInfo'
import Informations from './components/Informations'
import SectionInfo from './components/selectTypes'
import PokeInfo from './types'

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
        {info && <div style={{display:"flex", flexDirection:"column", width:"30%"}}>
         <div style={{textAlign:"center", marginTop:"10px"}}>{info?.name}</div>
             <ImageInfo numero={id} />
             <SectionInfo tipos={info?.types!}/>
             <Informations info={info!}/>
         </div>}
        </>
    )
}
export default PokeInforamacoes