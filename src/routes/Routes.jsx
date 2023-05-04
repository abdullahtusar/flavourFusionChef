import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Chefs from '../pages/Home/Chefs/Chefs';
import Home from '../pages/Home/Home/Home';
import ChefCard from '../pages/Home/ChefCard/ChefCard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Chefs></Chefs>,
            },
            {
                // path:'/chef',
                // element: <ChefCard></ChefCard>,
                // loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            }
        ]
    },

])

export default router;