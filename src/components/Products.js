import React, { useEffect, useState } from 'react';
import { assets } from '../../src/assets/assets';

const API_URL = "https://dummyjson.com/products";

const Products = () => {
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('products')) || [];
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];

    if (storedData.length > 0) {
      setData(storedData);
    } else {
      fetchDataFromAPI();
    }

    setFavourites(storedFavourites);
  }, []);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch data');

      const result = await response.json();
      const products = result.products.map(product => ({
        ...product,
        id: Date.now() + Math.random(),
      }));

      localStorage.setItem('products', JSON.stringify(products));
      setData(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct.id) {
      updateProduct(editingProduct.id);
    } else {
      addNewProduct();
    }
    closeModal();
  };

  const addNewProduct = () => {
    const newProduct = { id: Date.now(), ...editingProduct };
    const updatedData = [...data, newProduct];
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const updateProduct = (id) => {
    const updatedData = data.map(product =>
      product.id === id ? { ...product, ...editingProduct } : product
    );
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const deleteProduct = (id) => {
    const updatedData = data.filter(product => product.id !== id);
    setData(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  };

  const handleFavourite = (product) => {
    const isFavourite = favourites.some((fav) => fav.id === product.id);
    let updatedFavourites = isFavourite
      ? favourites.filter((fav) => fav.id !== product.id)
      : [...favourites, product];

    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  const isFavourite = (id) => favourites.some(fav => fav.id === id);

  const openModal = (product = {}) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {editingProduct?.id ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['title', 'price', 'discountPercentage', 'rating', 'stock', 'category', 'thumbnail'].map((field) => (
                <input
                  key={field}
                  type={['price', 'discountPercentage', 'rating', 'stock'].includes(field) ? 'number' : 'text'}
                  name={field}
                  value={editingProduct?.[field] || ''}
                  onChange={handleChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              ))}
              <div className="flex justify-between">
                <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {editingProduct?.id ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div key={product.id} className="p-3 bg-white rounded-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full rounded-lg h-40 object-cover" />
            <div className="flex justify-between items-center mt-4">
              <div>
                <h3 className="font-bold mb-2">{product.title}</h3>
                <p className="text-blue-500">$ {product.price}</p>
                <p>{product.rating}⭐</p>
              </div>
              {/* <img
                src={assets.favourite_icon}
                alt="Favourite"
                className="cursor-pointer"
                onClick={() => handleFavourite(product)}
              /> */}
              <img
                  src={isFavourite(product.id) ? assets.filled_favourite_icon : assets.favourite_icon}
                  alt="Favourite"
                  className="cursor-pointer"
                  onClick={() => handleFavourite(product)}
                />
            </div>
            <div className="flex gap-4 mt-4">
              <button onClick={() => openModal(product)} className="p-2 bg-gray-200 rounded hover:bg-gray-300">Edit Product</button>
              <button onClick={() => deleteProduct(product.id)} className="p-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
