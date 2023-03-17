import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../home/index.js';
import ProductPage from '../product_page/index.js';
import Login from '../login/index.js';
import Register from '../register/index.js';
import CardDetails from '../card/index.js';
export default function index() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productId' element={<ProductPage/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/card-details' element={<CardDetails/>}></Route>
        <Route path='*' element={<div className='container'>404 Not Found</div>}/>
    </Routes>
  )
}
