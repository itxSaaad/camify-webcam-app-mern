import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './About.jsx';
import App from './App.jsx';
import ErrorPage from './components/ui/ErrorPage.jsx';
import './index.css';
import HomeScreen from './screens/HomeScreen.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: () => import('./App.jsx'),
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
