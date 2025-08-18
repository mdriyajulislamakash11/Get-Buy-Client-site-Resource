import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../main/Mainlayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])
export default router;