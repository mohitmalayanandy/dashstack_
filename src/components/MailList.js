import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const MailList = () => {

    const location = useLocation()
    const [activeItem, setActiveItem] = useState(location.pathname)

    const handleItemClick = (path) => {
        setActiveItem(path)
    }
    return (
        <div>
            <div className='flex flex-col w-40 h-full bg-white border rounded-md p-2'>
                <button className='bg-blue-500 text-white p-2 rounded mb-4'> + Compose </button>
                <h2 className='text-lg font-semibold mb-4'>My Email</h2>
                <div className="h-full overflow-y-auto">
                    <ul className="space-y-1">
                        {[
                            { icon: assets.mail_icon, label: 'All Mail', path: '/inbox/allmail' },
                            { icon: assets.star_icon, label: 'Starred', path: '/inbox/starred' },
                            { icon: assets.sent_icon, label: 'Sent', path: '/inbox/sent' },
                            { icon: assets.draft_icon, label: 'Draft', path: '/inbox/draft' },
                            { icon: assets.spam_icon, label: 'Spam', path: '/inbox/spam' },
                            { icon: assets.importantmsg_icon, label: 'Important', path: '/inbox/important' },
                            { icon: assets.bin_icon, label: 'Bin', path: '/inbox/bin' },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.path}
                                    className={`block rounded ${activeItem === item.path ? 'bg-blue-200 text-black' : 'hover:bg-blue-100'}`}
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
                    
                </div>
            </div>
        </div>
    )
}

export default MailList
