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
        element: <AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: '/myEquipment',
        element: <MyEquipments></MyEquipments>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      }
    ],
  }


]);

export default Routes;