import React from 'react'
import Navbar from './pages/Navbar'
import Main from './pages/Main'
import Footer from './pages/Footer'
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import MensWear from './pages/MensWear'
import WomensWear from './pages/WomensWear'
import Contact from './pages/Contact'
import Stationary from './pages/Stationary'
import Gift from './pages/Gift'
import Furnitures from './pages/Furnitures'
import Chai from './pages/Chai'
import Electronics from './pages/Electronics'
import Vichels from './pages/Vichels'
import Product from './pages/Product'
// import Background from './pages/Background'

const App = () => {
  return (
   <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/MensWear' element={<MensWear/>}/>
    <Route path='/WomensWear' element={<WomensWear/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Stationary' element={<Stationary/>}/>
    <Route path='/Gift' element={<Gift/>}/>
    <Route path='/Furnitures' element={<Furnitures/>}/>
    <Route path='/Chai' element={<Chai/>}/>
    <Route path='/Electronics' element={<Electronics/>}/>
    <Route path='/Vichels' element={<Vichels/>}/>
    <Route path='/Product' element={<Product/>}/>
      </Routes>
    <Footer/>
    
 </>
  )
}

export default App