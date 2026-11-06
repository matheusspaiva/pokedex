import React, { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './auth.css'

const AuthPage: React.FC<{ registerMode?: boolean }> = ({ registerMode = false }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const { login, register } = useAuth()
  const navigate = useNavigate()

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    setBusy(true)
    try {
      registerMode ? await register(name, email, password) : await login(email, password)
      navigate('/Pokemons')
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Não foi possível concluir a operação.')
    } finally {
      setBusy(false)
    }
  }

  return <main className="auth-page"><section className="auth-card"><div className="auth-kicker">POKÉDEX / ACCESS</div><h1>{registerMode ? 'Criar treinador' : 'Entrar na Pokédex'}</h1><p className="auth-intro">{registerMode ? 'Salve sua coleção e compartilhe suas descobertas.' : 'Acesse sua coleção pessoal de Pokémon.'}</p><form onSubmit={submit}>{registerMode && <label>Nome<input required value={name} onChange={e => setName(e.target.value)} /></label>}<label>E-mail<input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></label><label>Senha<input type="password" minLength={6} required value={password} onChange={e => setPassword(e.target.value)} /></label>{error && <div className="auth-error">{error}</div>}<button disabled={busy} type="submit">{busy ? 'CARREGANDO...' : registerMode ? 'CRIAR CONTA' : 'ENTRAR'}</button></form><Link className="auth-back" to={registerMode ? '/login' : '/cadastro'}>{registerMode ? 'Já tenho uma conta' : 'Criar uma conta'}</Link><Link className="auth-public" to="/Pokemons">Continuar sem login →</Link></section></main>
}

export default AuthPage
