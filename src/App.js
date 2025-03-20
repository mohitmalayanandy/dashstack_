import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Product from './pages/Product'
import Favourites from './pages/Favourites'
import Inbox from './pages/Inbox'
import OrderLists from './pages/OrderLists'
import ProductStock from './pages/ProductStock'
import Pricing from './pages/Pricing'
import Calender from './pages/Calender'
import Todo from './pages/Todo'
import Contact from './pages/Contact'
import Invoice from './pages/Invoice'
import UIElement from './pages/UIElement'
import Team from './pages/Team'
import Table from './pages/Table'
import Settings from './pages/Settings'
import Logout from './pages/Logout'



import Navbar from './components/Navbar'
import Menubar from './components/Menubar'

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Navbar menuBar={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="flex flex-1 overflow-hidden absolute top-16 left-0 right-0 bottom-0">
          {isSidebarVisible && <Menubar />}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/inbox/*" element={<Inbox />} />
              <Route path="/orderlists" element={<OrderLists />} />
              <Route path="/productstock" element={<ProductStock />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/uielement" element={<UIElement />} />
              <Route path="/team" element={<Team />} />
              <Route path="/table" element={<Table />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
