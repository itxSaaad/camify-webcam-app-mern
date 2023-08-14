import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import ErrorPage from './components/ui/ErrorPage.jsx';

import HomeScreen from './screens/HomeScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import GalleryScreen from './screens/GalleryScreen.jsx';
import ImageScreen from './screens/ImageScreen.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/profile',
        element: <ProfileScreen />,
      },
      {
        path: '/gallery',
        element: <GalleryScreen />,
      },
      {
        path: '/gallery/:id',
        element: <ImageScreen />,
      },
      {
        path: '/admin/dashboard',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
