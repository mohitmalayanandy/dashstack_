import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Menubar from './components/Menubar'

const App = () => {
  return (
    <div className='text-center'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      <Menubar />
      </BrowserRouter>
    </div>
  )
}

export default App
