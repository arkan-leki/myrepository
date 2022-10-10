import { Product } from '@prisma/client';
import React, { useState } from 'react'
import { BsCart2, BsCartPlus, BsCartPlusFill } from 'react-icons/bs'
import { HiOutlineX } from 'react-icons/hi'
import { Modal } from './Util';

interface Props {
    product: Product,
    addProductHandler: any
    postId: Number
}

const ProductOnOrder = ({ product, addProductHandler, postId }: Props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }
    async function handleSave(id: any) {
        await addProductHandler({ price: product.price, quantity: '1', total: product.price, deviceId: id, productId: product.id, assignedBy: 'arkan', postId: postId })
        handleClose();
    }
    return (
        <>
            <div className="m-2 border-gray-500 shadow-gray-400 bg-slate-600 hover:bg-slate-500 cursor-pointer border-y-2 flex flex-col w-fit rounded shadow-inner items-center ">
                <div className="m-3 w-20 h-auto ">
                    <img src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="image" />
                </div>
                <div className='flex-1 justify-between items-center space-y-2 m-2'>
                    <div className="flex flex-col">
                        <p className="font-bold">Name: <b>{product.name}</b></p>
                        <p className='mx-2'>Price : ${product.price}</p>
                        <p className='mx-2'>Quantity : {product.quantity} Item</p>
                    </div>
                </div>
                <div>
                    <button className="btn m-2 bg-blue-600" onClick={handleShow}><BsCartPlus /></button>
                    <button className="btn m-2 bg-red-600"><HiOutlineX /></button>
                </div>
            </div>
            <Modal visible={show} onClose={handleClose} title={'Choose Device'} children={<>
                <div className='flex flex-col text-sm scrollbar h-80 w-fit'>
                    {product?.devices.map((bro) => (
                        <div key={bro.id} className='flex flex-row justify-between bg-slate-700 bg-opacity-30 hover:bg-opacity-100   border-l-2 p-3 w-full items-center '>
                            <p className='mr-2  p-1'>MIEI : {bro.code}</p>
                            <p className='mr-2  p-1'>$340 </p>
                            {bro.stock ? <button className='bg-cyan-700 p-2 ' onClick={(e) => handleSave(bro.id)}><BsCartPlus /></button> : <button className='bg-red-700 p-2'><BsCart2 /></button>}
                        </div>)
                    )}
                </div>
            </>} />
        </>
    )
}

export default ProductOnOrder