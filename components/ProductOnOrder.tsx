import React, { useState } from 'react'
import { BsCart2, BsCartPlus, BsCartPlusFill } from 'react-icons/bs'
import { HiOutlineX } from 'react-icons/hi'
import { Modal } from './Util';

const ProductOnOrder = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }

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
                    <button className="btn m-2 bg-blue-600" onClick={handleShow}><BsCartPlus /></button>
                    <button className="btn m-2 bg-red-600"><HiOutlineX /></button>
                </div>
            </div>
            <Modal visible={show} onClose={handleClose} title={'Choose Device'} children={<>
                <div className='flex flex-col text-sm scrollbar h-80 w-fit'>
                    {[0, 2, 3, 4, 5, 6, 1].map((bro) => (
                        <div className='flex flex-row justify-between bg-slate-700 bg-opacity-30 hover:bg-opacity-100   border-l-2 p-3 w-full items-center '>
                            <p className='mr-2  p-1'>MIEI : 12222273748848848</p>
                            <p className='mr-2  p-1'>$340 </p>
                            {bro > 0 ? <button className='bg-cyan-700 p-2 '><BsCartPlus /></button> : <button className='bg-red-700 p-2'><BsCart2 /></button>}
                        </div>)
                    )}
                </div>
            </>} />
        </>
    )
}

export default ProductOnOrder