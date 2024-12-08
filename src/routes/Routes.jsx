import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../layouts/MainLayouts';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddEquipments from '../pages/AddEquipments';
import AllProducts from '../pages/AllProducts';
import MyEquipments from '../pages/MyEquipments';
import Details from '../pages/Details';
import Private from '../private/Private';
import UpdateEquipment from '../pages/UpdateEquipment';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addEquipment',
        element: <AddEquipments></AddEquipments>,

      },
      {
        path: '/allRequirements',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/myEquipment',
        element: <Private><MyEquipments></MyEquipments></Private>
      },
      {
        path : '/updateEquipment/:id',
        element: <Private> <UpdateEquipment></UpdateEquipment> </Private>
      },
      {
        path: '/details/:id',
        element: <Private><Details></Details></Private>
      }
    ],
  }


]);

export default Routes;