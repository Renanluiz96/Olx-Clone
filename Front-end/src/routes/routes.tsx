import { Routes, Route, useRoutes } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'

export const MainRoutes = () => {
    //Dentro do useRoutes voce cria um objeto com cada rota
    return useRoutes([
    {path: "/", element: <Home />},
    {path: "/sobre", element: <About />},
    {path: "/signin", element: <SignIn />},
    {path: "*", element: <NotFound />}
    ])

    
}