import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pokeApi } from '../../api/pokeApi'
import backendApi from '../../api/backendApi'
import ListaPokemon from '../PokeList/Components/listaPokemon'
import pokemomLista from '../PokeList/types'
import './auth.css'

const SharedPokedexPage: React.FC = () => {
  const { code } = useParams(); const [pokemon, setPokemon] = useState<pokemomLista[]>([]); const [loading, setLoading] = useState(true); const [error, setError] = useState('')
  useEffect(() => { (async () => { try { const [shared, all] = await Promise.all([backendApi.get('/captured-pokemon-code', { params: { code } }), pokeApi.get('/pokemon/?offset=0&limit=2000')]); const raw = shared.data?.data ?? shared.data; const ids = new Set((raw?.pokemon ?? raw ?? []).map((item: any) => Number(item.pokemonId ?? item))); setPokemon(all.data.results.filter((item: any) => ids.has(Number(item.url.split('/').filter(Boolean).pop())))) } catch { setError('Não foi possível carregar esta Pokédex compartilhada.') } finally { setLoading(false) } })() }, [code])
  return <main className="shared-page"><section className="shared-card"><div className="auth-kicker">POKÉDEX / SHARED ACCESS</div><h1>Pokémon capturados</h1><p>Esta coleção foi compartilhada por código público.</p>{loading ? <p>Carregando...</p> : error ? <p className="auth-error">{error}</p> : pokemon.length ? <div className="pokemon-results shared-results"><ListaPokemon listaPoke={pokemon} detailBasePath="/Pokemons/" /></div> : <p>Nenhum Pokémon capturado.</p>}<Link className="auth-back" to="/Pokemons">Abrir Pokédex</Link></section></main>
}
export default SharedPokedexPage
