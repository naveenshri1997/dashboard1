import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Routes,Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Page1 from './page1';
function App() {

  return (
    <>   
    
 <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/page1' element={<Page1 />} />       
 </Routes>
    </>
  )
}

export default App
