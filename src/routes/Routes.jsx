import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement : <Error></Error>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
       {
        path : '/register',
        element : <Register></Register>
       }
      ]
    },
    
  ]);

export default Routes;