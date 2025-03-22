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
            <h2 className="text-lg font-semibold ml-5">Dashboard</h2>
            <div className="gap-1">
                <TotalStats />
                <SalesDetails />
                <div className="my-7">{/* Added gap */}</div> 
                <DealsDetails />
                <div className="my-7">{/* Added gap */}</div>
                <Revenue />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                <Customers />
                <FeaturedProduct />
                <SalesAnalytics />
            </div>
        </div>
    )
}

export default Dashboard;
