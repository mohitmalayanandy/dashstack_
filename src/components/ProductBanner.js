import React from 'react'

const ProductBanner = () => {
    return (
        <div className='text-white p-6 md:p-14 space-y-2 bg-gradient-to-tr from-blue-400 to-blue-500 rounded-md m-4 md:m-2'>
            <p className='text-[8px] md:text-[10px]'>September 12-25</p>
            <h1 className='font-extrabold text-xl md:text-3xl'>Enjoy free home <br /> delivery in this summer</h1>
            <p className='text-[8px] md:text-[10px]'>Designer Dresses30 - Pick from trendy Designer Dress.</p>
            <button className='rounded-md px-2 py-1 md:px-4 md:py-2 my-2 bg-orange-500 text-center text-xs'>Get Started</button>
        </div>
    )
}

export default ProductBanner
