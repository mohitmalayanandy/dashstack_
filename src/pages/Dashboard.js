import React from 'react'
import TotalStats from '../components/TotalStats';
import SalesDetails from '../components/SalesDetails';
import DealsDetails from '../components/DealsDetails';
import Revenue from '../components/Revenue';
import Customers from '../components/Customers';
import FeaturedProduct from '../components/FeaturedProduct';
import SalesAnalytics from '../components/SalesAnalytics';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
            <TotalStats />
            <SalesDetails />
            <DealsDetails />
            <Revenue />
            <div className='flex justify-between'>
                <Customers />
                <FeaturedProduct />
                <SalesAnalytics />
            </div>
        </div>
    )
}

export default Dashboard