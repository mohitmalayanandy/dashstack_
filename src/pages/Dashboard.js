import React from 'react'
import TotalStats from '../components/TotalStats';
import SalesDetails from '../components/SalesDetails';
import DealsDetails from '../components/DealsDetails';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
            <TotalStats />
            <SalesDetails />
            <DealsDetails />
        </div>
    )
}

export default Dashboard