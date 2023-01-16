import logo1 from './assets/Image/1.svg';
import logo5 from './assets/Image/5.svg';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PacMan from './components/Loader/PacMan';

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
          <div className='box-text'>
            <div style={{marginRight: '30px', marginTop: '7px'}}>
            <PacMan  />  
            </div>

          <div>
          Acesse a Pokedex
          </div>

        <div className='inverter' style={{marginLeft: '30px', marginTop: '7px'}}>
          <PacMan  />  
        </div>
 
          </div>

        </Link>
      </header>
    </div>
  );
}

export default App;
