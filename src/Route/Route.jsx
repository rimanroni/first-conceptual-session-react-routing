import React from 'react';

import MainLayOut from '../Layout/MainLayOut';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import { createBrowserRouter } from 'react-router-dom';
import ProductDetils from '../pages/ProductDetils/ProductDetils';
import DashboardLayout from '../pages/DashBoardLayOut/DashboardLayout';
import DashBoard from '../pages/DashBoardLayOut/DashBoard';
import Profile from '../pages/DashBoardLayOut/DashBoardPages/Profile';
import Show from '../pages/DashBoardLayOut/DashBoardPages/Show';
import Student from '../pages/DashBoardLayOut/DashBoardPages/Student';
 
const Router =  createBrowserRouter([
    {
      path: "/",
      element:  <MainLayOut/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }, 
        {
          path:"/products",
          element: <Products/>,
          loader:()=>fetch('https://dummyjson.com/products'),
        },
        {
          path:'/product/:productId',
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.productId}`),
          element: <ProductDetils/>
        },
        {
            path:'/dashboard',
            element:<DashboardLayout/>,
            children:[
              {
                path:'/dashboard',
                element:<DashBoard/>
              }, 
              {
                path:"/dashboard/profile", 
                element:<Profile/>
              }, 
              {
                path:"/dashboard/showdetils", 
                element:<Show/>
              }, 
              {
                path:"/dashboard/student",
                element:<Student/>
              }
            ]
        }
      ]
    },
    
  ]);
  

export default  Router;