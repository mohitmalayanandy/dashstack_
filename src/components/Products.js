import React, { useEffect, useState } from 'react';
import { assets } from '../../src/assets/assets';
const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    category: '',
    thumbnail: '',
  });
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('products'));
    if (storedData && storedData.length > 0) {
      setData(storedData);
    } else {
      fetchDataFromAPI();
    }
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      const products = result.products;

      const formattedProducts = products.map(product => ({
        ...product,
        id: Date.now() + Math.random()
      }));

      localStorage.setItem('products', JSON.stringify(formattedProducts));
      setData(formattedProducts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProductId) {
      updateProduct(editingProductId);
    } else {
      addNewProduct();
    }

    closeModal();
  };

  const addNewProduct = () => {
    const newProductWithId = { id: Date.now(), ...newProduct };

    const updatedData = [...data, newProductWithId];
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const updateProduct = (id) => {
    const updatedData = data.map(product =>
      product.id === id ? { ...product, ...newProduct } : product
    );

    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const deleteProduct = (id) => {
    const updatedData = data.filter(product => product.id !== id);
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const handleEdit = (product) => {
    setEditingProductId(product.id);
    setNewProduct({
      title: product.title,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingProductId(null);
    setIsModalOpen(false);
    setNewProduct({
      title: '',
      price: '',
      discountPercentage: '',
      rating: '',
      stock: '',
      category: '',
      thumbnail: '',
    });
  };

  const handleFavourite = () => {
    
    console.log('Favourite clicked')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
        >
          Add Product
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {editingProductId ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['title', 'price', 'discountPercentage', 'rating', 'stock', 'category', 'thumbnail'].map((item) => (
                <input
                  key={item}
                  type={item === 'price' || item === 'discountPercentage' || item === 'rating' || item === 'stock' ? 'number' : 'text'}
                  name={item}
                  value={newProduct[item]}
                  onChange={handleChange}
                  placeholder={item.charAt(0).toUpperCase() + item.slice(1)}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ))}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  {editingProductId ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div key={product.id} className="p-6 bg-white text-black rounded-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 mt-1 object-cover" />
            <div className='flex justify-between items-center  mt-4'>
              <div>
                <h3 className="font-bold mb-2">{product.title}</h3>
                <p className='text-blue-500'>$ {product.price}</p>
                <p>{product.rating}⭐</p>
              </div>
              <div>
                <img src={assets.favourite_icon} alt="" onClick={handleFavourite}/>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="p-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
              >
                Edit Product
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
