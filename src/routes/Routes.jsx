import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';
import TimeLine from '../pages/TimeLine';
import Stats from '../pages/Stats';
import Error from '../pages/Error';
import FriendDetails from '../pages/FriendDetails';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/timeLine',
                element: <TimeLine></TimeLine>
            },
            {
                path: '/stats',
                element: <Stats></Stats>
            },
            {
                path: '/friendDetails',
                element: <FriendDetails></FriendDetails>
            }

        ],
        errorElement: <Error></Error>
    }
])