import React from 'react'
import Products from '../components/Products'
import ProductBanner from '../components/ProductBanner'

const Product = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Page</h2>
      <ProductBanner/>
      <Products />
    </div>
  )
}

export default Product