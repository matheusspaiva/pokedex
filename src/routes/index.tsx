import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SystemRoute from './system'

const AppRoute: React.FC = () => {

    return (

        <BrowserRouter basename="/pokedex">
<SystemRoute />

    </BrowserRouter>

    )
}
export default AppRoute
