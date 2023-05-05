import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import LoginLayout from '../layout/LoginLayout';
import Login from '../pages/Login/Login/Login';
import Registration from '../pages/Login/Registration/Registration';
import ChefDetails from '../pages/Home/ChefDetails/ChefDetails';
import RecipesLayout from '../layout/RecipesLayout';
import Blog from '../pages/Home/Blog/Blog';
import ErrorPage from '../pages/Home/ErrorPage/ErrorPage';

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
            },
            {
                path:"*",
                element: <ErrorPage></ErrorPage>
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