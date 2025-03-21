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
        <div className="">
            <h2 className="text-lg font-semibold ml-5 md:ml-4">Dashboard</h2>
            <TotalStats />
            <SalesDetails />
            <DealsDetails />
            <Revenue />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <Customers />
                <FeaturedProduct />
                <SalesAnalytics />
            </div>
        </div>
    )
}

export default Dashboard