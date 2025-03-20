import React from 'react';
import { Link } from 'react-router-dom';
const FeaturedProduct = () => {
    return (
        <div className="m-5 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 md:m-3 md:p-3 sm:m-2 sm:p-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Featured Product</h2>
            <p className="text-gray-600">
                Discover our latest and most popular product with amazing features and top-notch quality.
            </p>
            <Link to={`/product`}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default FeaturedProduct;
