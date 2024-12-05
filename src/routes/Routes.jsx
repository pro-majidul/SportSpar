import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Error from '../pages/Error';
import Banner from '../components/Banner';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement : <Error></Error>,
      children : [
        {
          path : '/',
          element : <Banner></Banner>
        }
      ]
    },
  ]);

export default Routes;