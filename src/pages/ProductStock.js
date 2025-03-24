import React, { useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import { useEffect } from 'react';


const ProductStock = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="h-full overflow-hidden" >
      <h1 className="text-lg font-semibold ml-5 md:ml-4">Product Stock</h1>

      <div className="flex justify-end p-1 mb-4">
        <input
          type="text"
          placeholder="Search product name"
          className="w-full md:w-1/3 px-2 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>

      <div className="overflow-x-auto h-full pb-20">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Product Name</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Piece</th>
              <th className="py-2 px-4 border-b">Available Color</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </td>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.category}</td>
                <td className="py-2 px-4 border-b">{product.price}</td>
                <td className="py-2 px-4 border-b">{product.pieces}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex gap-1">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-2 px-4 border-b"  >
                  <button className="mr-2 text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductStock;