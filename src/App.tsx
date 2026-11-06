import logo1 from './assets/Image/1.svg'
import logo5 from './assets/Image/5.svg'
import './App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PacMan from './components/Loader/PacMan'
import { useAuth } from './context/AuthContext'

function App() {
  const [alternateLight, setAlternateLight] = useState(false)
  const { user, logout } = useAuth()

  return (
    <main className="landing-page">
      <section className="landing-device" aria-label="Pokedex">
        <button
          className={`landing-sensor ${alternateLight ? 'is-active' : ''}`}
          onClick={() => setAlternateLight(!alternateLight)}
          aria-label="Alternar indicador da Pokedex"
          type="button"
        >
          <span className="sensor-glass" />
          <span className="sensor-dot sensor-dot--yellow" />
          <span className="sensor-dot sensor-dot--green" />
        </button>

        <div className="landing-screen">
          <div className="screen-header">
            <span>POKÉDEX</span>
            <span className="screen-status">ONLINE</span>
          </div>
          <img src={alternateLight ? logo1 : logo5} className="App-logo" alt="Ilustração de Pokédex" />
          <p className="landing-copy">Seu terminal para descobrir espécies, formas e atributos Pokémon.</p>
          <div className="landing-account">{user ? <><Link to="/perfil">{user.name}</Link><button type="button" onClick={logout}>Sair</button></> : <><Link to="/login">Entrar</Link><Link to="/cadastro">Criar conta</Link></>}</div>
        </div>

        <Link className="App-link" to="/Pokemons">
          <span className="link-loader"><PacMan /></span>
          <span>Abrir Pokédex</span>
          <span className="link-loader inverter"><PacMan /></span>
        </Link>
      </section>
    </main>
  )
}

export default App
