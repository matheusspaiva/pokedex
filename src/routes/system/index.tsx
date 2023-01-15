import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import PageRender from '../../components/PageRender'
import PokeInforamacoes from '../../Page/PokeInfo'
import PokeList from '../../Page/PokeList'
 
const SystemRoute: React.FC = () => {

    return (

        <Routes>
              <Route index element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<App />} />}/>
              <Route path='pokedex' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<App />} />}/>
                   <Route path='pokedex/Pokemons' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<PokeList />} />}/>
                   <Route path='pokedex/Pokemons/:id' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<PokeInforamacoes />} />}/>
        </Routes>
    )
}

export default SystemRoute