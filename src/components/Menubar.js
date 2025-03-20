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
        <div className="w-56 h-full overflow-y-auto p-6">
            <ul className="space-y-4">
                {[
                    { icon: assets.dashboard_icon, label: 'Dashboard', path: '/' },
                    { icon: assets.product_icon, label: 'Product', path: '/product' },
                    { icon: assets.favourite_icon, label: 'Favourites', path: '/favourites' },
                    { icon: assets.inbox_icon, label: 'Inbox', path: '/inbox' },
                    { icon: assets.order_list, label: 'Order Lists', path: '/orderlists' },
                    { icon: assets.product_stock, label: 'Product Stock', path: '/productstock' },
                ].map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className={`block p-2 rounded ${activeItem === item.path ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                            onClick={() => handleItemClick(item.path)}
                        >
                            <div className="flex items-center p-2 rounded cursor-pointer">
                                <img src={item.icon} alt={`${item.label}_icon`} className="h-4 w-4" />
                                <p className="ml-4">{item.label}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr className="w-full border-gray-300" />
            <p className="mt-4 mb-2 text-gray-500">Pages</p>
            <div className="space-y-1">
                {[
                    { icon: assets.pricing_icon, label: 'Pricing', path: '/pricing' },
                    { icon: assets.calender_icon, label: 'Calender', path: '/calender' },
                    { icon: assets.todo_icon, label: 'To-Do', path: '/todo' },
                    { icon: assets.contact_icon, label: 'Contact', path: '/contact' },
                    { icon: assets.invoice_icon, label: 'Invoice', path: '/invoice' },
                    { icon: assets.ui_icon, label: 'UI Element', path: '/uielement' },
                    { icon: assets.team_icon, label: 'Team', path: '/team' },
                    { icon: assets.table_icon, label: 'Table', path: '/table' },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`block p-2 rounded ${activeItem === item.path ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick(item.path)}
                    >
                        <div className="flex items-center p-2 rounded cursor-pointer">
                            <img src={item.icon} alt={item.label} className="h-4 w-4" />
                            <p className="ml-4">{item.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <hr className="w-full border-gray-300" />
            <div className="space-y-1">
                {[
                    { icon: assets.setting_icon, label: 'Settings', path: '/settings' },
                    { icon: assets.logout_icon, label: 'Logout', path: '/logout' },
                ].map((item, index) => (
                    <Link
                        key={index}
                        to={item.path}
                        className={`block p-2 rounded ${activeItem === item.path ? 'bg-blue-700 text-white' : 'hover:bg-blue-500'}`}
                        onClick={() => handleItemClick(item.path)}
                    >
                        <div className="flex items-center p-2 rounded cursor-pointer">
                            <img src={item.icon} alt={item.label} className="h-4 w-4" />
                            <p className="ml-4">{item.label}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Menubar