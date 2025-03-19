import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ menuBar }) => {
    return (
        <div className='flex fixed top-0 left-0 right-0 justify-between items-center p-4 bg-white text-black md:gap-3'>
            <h1 className="text-2xl font-bold">
                <span className="text-blue-500">Dash</span>Stack
            </h1>
            <div className='flex items-center space-x-4'>
                <img
                    src={assets.menu_bar}
                    alt="menu_bar"
                    className='h-6 w-6 cursor-pointer'
                    onClick={menuBar} />

                <div className='hidden md:flex items-center border border-gray-300 rounded-full bg-gray-100 px-4 py-1 w-96'>
                    <img src={assets.search_icon} alt="search_icon" className='h-4 w-4' />
                    <input
                        type="text"
                        className='outline-none bg-transparent text-black w-full ml-2'
                        placeholder="Search"
                    />
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <img src={assets.notification_icon} alt="notification_icon" className='h-6 w-6 cursor-pointer' />

                <div className='hidden md:flex items-center space-x-2 cursor-pointer'>
                    <img src={assets.uk_flag} alt="uk_flag" className='h-5 w-8 rounded-sm' />
                    <div className='flex items-center'>
                        <p className='text-sm'>English</p>
                        <img src={assets.drop_down} alt="dropdown" className='h-3 w-4 ml-1' />
                    </div>
                </div>

                <div className='flex items-center space-x-2 cursor-pointer'>
                    <img src={assets.user_icon} alt="user_icon" className='h-8 w-8 rounded-full' />
                    <div className='hidden md:flex flex-col items-start'>
                        <p className='text-sm font-medium'>Moni</p>
                        <p className='text-xs text-gray-400'>Admin</p>
                    </div>
                    <img src={assets.drop_down} alt="dropdown" className='h-3 w-4' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
