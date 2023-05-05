import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../pages/Home/Home/Home';
import ChefCard from '../pages/Home/ChefCard/ChefCard';
import LoginLayout from '../layout/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Registration from '../pages/Login/Registration/Registration';
import Banner from '../pages/Home/Banner/Banner';
import Chefs from '../pages/Home/Chefs/Chefs';
import ChefDetails from '../pages/Home/ChefDetails/ChefDetails';
import RecipesLayout from '../layout/RecipesLayout';
import Blog from '../pages/Home/Blog/Blog';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'Registration',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: 'home',
        element: <Main></Main>,
    },
    {
        path:'chef',
        element: <RecipesLayout></RecipesLayout>,
        children: [
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-abdullahtusa-abdullahtusar.vercel.app/chef/${params.id}`)
            }
        ]
    }

])

export default router;