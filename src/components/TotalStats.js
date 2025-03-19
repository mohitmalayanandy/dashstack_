import React from 'react'
import { assets } from '../assets/assets'

const TotalStats = () => {
    const stats = [
        { icon: assets.total_users, label: 'Total User', number: 40689 },
        { icon: assets.total_orders, label: 'Total Order', number: 10293 },
        { icon: assets.total_sales, label: 'Total Sales', number: "$ " + 89000 },
        { icon: assets.total_pending, label: 'Total Pending', number: 2040 }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {stats.map((item, index) => (
                <div 
                    key={index} 
                    className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md hover:bg-blue-100 transition-all duration-300 cursor-pointer">
                    <div>
                        <p className="text-gray-600 text-sm">{item.label}</p>
                        <p className="text-xl font-semibold">{item.number.toLocaleString()}</p>
                    </div>

                    <div>
                        <img src={item.icon} alt={item.label} className="h-12 w-12" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TotalStats