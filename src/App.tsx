import logo1 from './assets/Image/1.svg';
import logo5 from './assets/Image/5.svg';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [color,setColor] = useState<boolean>(false)
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={()=>{setColor(!color) }}>
        <img  src={color?logo1:logo5} className="App-logo" alt="logo" />
        </div>

        <br></br>
        <Link
          className="App-link"
          to="Pokemons"
          rel="noopener noreferrer"
        >
          Acesse a Pokedex
        </Link>
      </header>
    </div>
  );
}

export default App;
