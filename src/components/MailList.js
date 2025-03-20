import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'

const MailList = () => {

    const location = useLocation()
    const [activeItem, setActiveItem] = useState(location.pathname)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newMail, setNewMail] = useState({
        to: '',
        subject: '',
        message: '',
        attachment: '',
    })

    const handleComposeClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleItemClick = (path) => {
        setActiveItem(path)
    }
    return (
        <div>
            <div className='flex flex-col w-40 h-full bg-white border rounded-md p-2'>
                <button onClick={handleComposeClick} className='bg-blue-500 text-white p-2 rounded mb-4'> + Compose </button>
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-0 flex items-end justify-end z-50">
                    <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md m-10">
                        <h2 className="text-lg font-medium mb-4 text-start">New Message</h2>
                        <form className="space-y-4">
                            {['to', 'subject', 'message', 'attachment'].map((item) => (
                                <input
                                    key={item}
                                    type={item === 'attachment' ? 'file' : item === 'to' ? 'email' : 'text'}
                                    name={item}
                                    value={newMail[item]}
                                    onChange={(e) => setNewMail({ ...newMail, [item]: e.target.value })}
                                    placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                                    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            ))}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="px-4 py-2 bg-red-100 text-black rounded hover:bg-red-300 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MailList
