import React from 'react'

const WidgetItem = () => {
    return (
        <div className='rounded-md inline-block mr-4 align-top mt-3 p-4 bg-white text-gray-700 text-[14px] shadow-lg shadow-gray-700 hover:bg-gray-700 hover:text-white hover:cursor-pointer '>
            <h3>Sales</h3>
            <p ><strong className='text-3xl mr-2 font-semibold'>1,049.61</strong><span>USD</span></p>
            <p className='text-green-500 font-bold'>+18.05 (1.75%) today</p>
            <p>After hours 1,048.00 <span className='text-red-500'>-1.61 (0.15%)</span></p>
        </div>
    )
}

export default WidgetItem