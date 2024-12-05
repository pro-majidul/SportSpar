import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Error from '../pages/Error';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement : <Error></Error>
    },
  ]);

export default Routes;