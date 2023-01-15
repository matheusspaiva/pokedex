import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom'
import ImageInfo from './components/ImageInfo'
import Informations from './components/Informations'
import SectionInfo from './components/selectTypes'
import PokeInfo from './types'
import './index.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PokeInforamacoes: React.FC = () => {

    const [info, setInfo ] = useState<PokeInfo>()
    const [img, setImg ] = useState<string[]>([])
    const {id} = useParams<string>()
    const [erro, setErro ] = useState<string | null>(null)
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response =>{
            return response.json();
              }).then((data : PokeInfo) =>
              {
                setErro(null)
                setInfo(data)
                const images :string[]= [] 
                for (const key in data.sprites) {
                    const tipo = typeof (data.sprites as any)[key]
                    console.log(tipo)
                    if(tipo === 'string'){
                        images.push((data.sprites as any)[key])
                    }
                }

                setImg(images?.filter(x=> x !== null && x.length>0))
          }).catch(() => {
                setErro('OPS ... POKEMON NÃO ENCONTRADO')
          })

    }, [id, setImg, setErro])
    return (

        <>
        {erro && <h1>{erro}</h1>}
        {info && erro===null &&
        <>
        <div className='container'>
        <div>
        <Link className='circle-buttom' to={`pokedex/Pokemons/${Number(id)-1}`}>
        <FaArrowLeft />
            </Link>
        </div>
            <div className='box'> 
         <div className='title-box'><p className='title-card'>{info?.name}</p></div>
             <ImageInfo numero={id} images={img} />
             <SectionInfo tipos={info?.types!}/>
             <Informations info={info!}/>
             </div>
             <div >
             <Link className='circle-buttom' to={`pokedex/Pokemons/${Number(id)+1}`}>
        <FaArrowRight />
            </Link>
             </div>
         </div>
         </>
         }
        </>
    )
}
export default PokeInforamacoes