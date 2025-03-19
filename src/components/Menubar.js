import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menubar = () => {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(location.pathname)

  const handleItemClick = (path) => {
    setActiveItem(path)
  }

  return (
    <div className="w-56 h-full p-6">
      <ul className="space-y-4">
        <li>
          <Link
            to="/"
            className={`block p-2 rounded ${activeItem === '/' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
            onClick={() => handleItemClick('/')}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/product"
            className={`block p-2 rounded ${activeItem === '/product' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
            onClick={() => handleItemClick('/product')}
          >
            Product
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menubar