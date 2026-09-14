
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ImageInfo from './components/ImageInfo'
import Informations from './components/Informations'
import PokeInfo from './types/PokeInfo'
import './styles/index.css'

import { FaArrowLeft, FaArrowRight, FaRegWindowClose } from 'react-icons/fa'

import Ring from '../../components/Loader/Ring'
import { pokeApi } from '../../api/pokeApi'

import { PokeSpecie, Variety } from './types/PokeSpecie'

import FormsPoke from './components/Forms'
import { PokemonStats } from './components/PokemonStats'

const PokeInforamacoes: React.FC = () => {
    const [info, setInfo] = useState<PokeInfo>()
    const [img, setImg] = useState<string[]>([])
    const { id } = useParams<string>()
    const [erro, setErro] = useState<string | null>('')
    const [load, setLoad] = useState<boolean>(true)
    const [varieties, setVarities] = useState<Variety[]>([])

    const loadSpecies = useCallback(async () => {
        try {
            const response = await pokeApi.get<PokeSpecie>(
                `/pokemon-species/${id}`
            )

            const data = response.data

            // verificação de formas
            const pokeforms = data.varieties.filter(
                x => x.is_default === false
            )

            setVarities(pokeforms)
        } catch {
        }
    }, [id])

    const loadData = useCallback(async () => {
        setLoad(true)

        try {
            await loadSpecies()

            const response = await pokeApi.get<PokeInfo>(
                `/pokemon/${id}`
            )

            const data = response.data

            setErro(null)
            setInfo(data)

            const images: string[] = [
                data.sprites.front_default,
                data.sprites.back_default,
                data.sprites.front_female,
                data.sprites.back_female,
                data.sprites.front_shiny,
                data.sprites.back_shiny,
                data.sprites.front_shiny_female,
                data.sprites.back_shiny_female
            ]

            setImg(
                images.filter(
                    x => x !== null && x.length > 0
                )
            )
        } catch {
            setErro('OPS ... POKEMON NÃO ENCONTRADO')
        }

        setLoad(false)
    }, [id, loadSpecies])

    useEffect(() => {
        loadData()
    }, [loadData])

    return (
        <>
            {load && <Ring />}

            {erro && (
                <h1>
                    {erro}

                    <p
                        className="paragrafo-link"
                        onClick={() => window.history.back()}
                    >
                        CLIQUE AQUI PARA RETORNAR
                    </p>
                </h1>
            )}

            {info && erro === null && (
                <>
                    <div className="container">
                        <div>
                            <Link
                                className="circle-button"
                                to={`/pokedex/Pokemons/${Number(id) - 1}`}
                            >
                                <FaArrowLeft />
                            </Link>
                        </div>

                        <div className="box">
                            <div className="title-box">
                                <p className="title-card">
                                    {info.name}
                                </p>

                                <Link
                                    to="/pokedex/Pokemons"
                                    className="tile-button"
                                >
                                    <h2>
                                        <FaRegWindowClose />
                                    </h2>
                                </Link>
                            </div>

                            <ImageInfo
                                numero={id}
                                images={img}
                            />



                            <FormsPoke
                                forms={varieties}
                            />

                            <Informations
                                info={info}
                            />

                            <PokemonStats
                                stats={info.stats.map(x => ({
                                    base_stat: x.base_stat,
                                    name: x.stat.name
                                }))}
                            />
                        </div>

                        <div>
                            <Link
                                className="circle-button"
                                to={`/pokedex/Pokemons/${Number(id) + 1}`}
                            >
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default PokeInforamacoes
