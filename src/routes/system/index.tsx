import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import PageRender from '../../components/PageRender'
import PokeInforamacoes from '../../Page/PokeInfo'
import PokeList from '../../Page/PokeList'
import AuthPage from '../../Page/Auth/AuthPage'
import ProfilePage from '../../Page/Auth/ProfilePage'
import SharedPokedexPage from '../../Page/Auth/SharedPokedexPage'
 
const SystemRoute: React.FC = () => {

    return (

        <Routes>
              <Route index element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<App />} />}/>
              <Route path='pokedex' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<App />} />}/>
                   <Route path='pokedex/Pokemons' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<PokeList />} />}/>
                   <Route path='pokedex/Pokemons/:id' element={<PageRender pageName="System_Home" pageTitle="Pokedex" renderComponent={<PokeInforamacoes />} />}/>
              <Route path='login' element={<AuthPage registerMode={false} />} />
              <Route path='cadastro' element={<AuthPage registerMode />} />
              <Route path='perfil' element={<ProfilePage />} />
              <Route  path='pokedex/compartilhar/:code' element={<SharedPokedexPage />} />
        </Routes>
    )
}

export default SystemRoute
