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
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <TotalStats />
            <SalesDetails />
            <DealsDetails />
            <Revenue />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Customers />
                <FeaturedProduct />
                <SalesAnalytics />
            </div>
        </div>
    )
}

export default Dashboard