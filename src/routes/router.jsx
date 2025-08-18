import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../main/Mainlayout';
import Shop from '../pages/Products-Shop/Shop';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/products',
                element: <Shop />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
])
export default router;