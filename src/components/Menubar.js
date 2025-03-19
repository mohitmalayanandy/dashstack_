import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

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
                        onClick={() => handleItemClick('/')}>
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.dashboard_icon} alt="dashboard_icon" className="h-4 w-4" />
                            <p className="ml-4">Dashboard</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/product"
                        className={`block p-2 rounded ${activeItem === '/product' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick('/product')}
                    >
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.product_icon} alt="product_icon" className="h-4 w-4" />
                            <p className="ml-4">Product</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/favourites"
                        className={`block p-2 rounded ${activeItem === '/favourites' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick('/favourites')}
                    >
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.favourite_icon} alt="favourites_icon" className="h-4 w-4" />
                            <p className="ml-4">Favourites</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/inbox"
                        className={`block p-2 rounded ${activeItem === '/inbox' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick('/inbox')}
                    >
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.inbox_icon} alt="inbox_icon" className="h-4 w-4" />
                            <p className="ml-4">Inbox</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/orderlists"
                        className={`block p-2 rounded ${activeItem === '/orderlists' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick('/orderlists')}
                    >
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.order_list} alt="order_lists_icon" className="h-4 w-4" />
                            <p className="ml-4">Order Lists</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/productstock"
                        className={`block p-2 rounded ${activeItem === '/productstock' ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick('/productstock')}
                    >
                        <div className="flex items-center p-2 hover:bg-blue-500 rounded cursor-pointer">
                            <img src={assets.product_stock} alt="product_stock_icon" className="h-4 w-4" />
                            <p className="ml-4">Product Stock</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menubar