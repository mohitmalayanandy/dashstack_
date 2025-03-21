import React from 'react'
import Orders from '../components/Orders'
const OrderLists = () => {
  return (
    <div className="h-full overflow-y-auto">
      <h2 className="text-lg font-semibold ml-5 md:ml-4">Data Table</h2>
      <Orders />
    </div>
  )
}

export default OrderLists