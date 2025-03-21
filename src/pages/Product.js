import React from 'react'
import Products from '../components/Products'
import ProductBanner from '../components/ProductBanner'

const Product = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold ml-5">Product Page</h2>
      <ProductBanner/>
      <Products />
    </div>
  )
}

export default Product