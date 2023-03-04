import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from '../root/App.js';
  import ProductPage from '../product_page/index.js';
export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },
    {
        path:"/product/:productId",
        element:<ProductPage/>
    }
]);