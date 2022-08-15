import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import { HiOutlineX } from 'react-icons/hi'

const ProductOnOrder = () => {
    return (
        <>
            <div className="m-2 border-gray-500 shadow-gray-400 bg-slate-600 hover:bg-slate-500 cursor-pointer border-y-2 flex flex-col w-fit rounded shadow-inner items-center ">
                <div className="m-3 w-20 h-auto ">
                    <img src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="image" />
                </div>
                <div className='flex-1 justify-between items-center space-y-2 m-2'>
                    <div className="flex flex-col">
                        <p className="font-bold">Name: <b>IPhone 9</b></p>
                        <p className='mx-2'>Price : $800</p>
                        <p className='mx-2'>Quantity : 1 Item</p>
                    </div>
                </div>
                <div>
                    <button className="btn m-2 bg-blue-600"><BsCartPlusFill /></button>
                    <button className="btn m-2 bg-red-600"><HiOutlineX /></button>
                </div>
            </div>
        </>
    )
}

export default ProductOnOrder