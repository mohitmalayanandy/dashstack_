import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const handleFavourite = (product) => {
    const isFavourite = favourites.some(fav => fav.id === product.id);
    let updatedFavourites = isFavourite
      ? favourites.filter(fav => fav.id !== product.id)
      : [...favourites, product];

    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };
  const isFavourite = (id) => favourites.some(fav => fav.id === id);
  return (
    <div className="min-h-full bg-gray-100">
      <h2 className="text-lg font-semibold ml-5">Favourites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favourites.map(product => (
          <div key={product.id} className="p-3 bg-white rounded-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full rounded-lg h-40 object-cover" />
            <div className="flex justify-between items-center mt-4">
              <div>
                <h3 className="font-bold mb-2">{product.title}</h3>
                <p className="text-blue-500">$ {product.price}</p>
                <p>{product.rating}⭐</p>
              </div>
              <img
                src={isFavourite(product.id) ? assets.filled_favourite_icon : assets.favourite_icon}
                alt="Favourite"
                className="cursor-pointer"
                onClick={() => handleFavourite(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
