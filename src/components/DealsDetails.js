import React from 'react'

const DealsDetails = () => {
    const orders = [
        {
            id: 1,
            title: "Apple Watch",
            location: "6096 Marjolaine Landing",
            time: "10:30 AM",
            quantity: 423,
            price: 34295,
            status: "Shipped" 
        },
        {
            "id": 1,
            "title": "Apple Watch Series 9",
            "location": "6096 Marjolaine Landing",
            "time": "10:30 AM",
            "quantity": 423,
            "price": 34295,
            "status": "Shipped"
        },
        {
            "id": 2,
            "title": "Samsung Galaxy S23 Ultra",
            "location": "2391 Jasmine Street",
            "time": "2:15 PM",
            "quantity": 198,
            "price": 109999,
            "status": "Out for Delivery"
        },
        {
            "id": 3,
            "title": "Sony WH-1000XM5 Headphones",
            "location": "742 Evergreen Terrace",
            "time": "4:45 PM",
            "quantity": 120,
            "price": 29990,
            "status": "Delivered"
        },
        {
            "id": 4,
            "title": "MacBook Pro 16-inch",
            "location": "1225 Sunset Boulevard",
            "time": "1:00 PM",
            "quantity": 54,
            "price": 249999,
            "status": "Shipped"
        },
        {
            "id": 5,
            "title": "iPad Pro 12.9-inch",
            "location": "500 Fifth Avenue",
            "time": "3:30 PM",
            "quantity": 87,
            "price": 129900,
            "status": "Out for Delivery"
        },
        {
            "id": 6,
            "title": "Dell XPS 13",
            "location": "200 Elm Street",
            "time": "11:20 AM",
            "quantity": 76,
            "price": 114999,
            "status": "Delivered"
        },
        {
            "id": 7,
            "title": "Google Pixel 8 Pro",
            "location": "1337 Binary Road",
            "time": "5:15 PM",
            "quantity": 150,
            "price": 99999,
            "status": "Shipped"
        }
    ];
    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'shipped':
                return 'bg-blue-100 text-blue-600';
            case 'out for delivery':
                return 'bg-yellow-100 text-yellow-600';
            case 'delivered':
                return 'bg-green-100 text-green-600';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="m-3 p-3 bg-white rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b text-left">ID</th>
                            <th className="py-2 px-4 border-b text-left">Title</th>
                            <th className="py-2 px-4 border-b text-left">Location</th>
                            <th className="py-2 px-4 border-b text-left">Time</th>
                            <th className="py-2 px-4 border-b text-left">Quantity</th>
                            <th className="py-2 px-4 border-b text-left">Price</th>
                            <th className="py-2 px-4 border-b text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{order.id}</td>
                                <td className="py-2 px-4 border-b">{order.title}</td>
                                <td className="py-2 px-4 border-b">{order.location}</td>
                                <td className="py-2 px-4 border-b">{order.time || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{order.quantity}</td>
                                <td className="py-2 px-4 border-b">₹{order.price.toLocaleString()}</td>
                                <td className="py-2 px-4 border-b">
                                    <span className={`px-2 py-1 rounded-md ${getStatusColor(order.status)}`}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DealsDetails


