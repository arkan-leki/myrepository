import { Product } from '@prisma/client'
import React from 'react'
import { ShowProductsModal } from './Util'

interface Props {
    product: Product | any
}

const DeviceItem = ({ product }: Props) => {
    return (
        <>
            <div className='flex flex-col w-48 min-w-max m-2 bg-slate-800 bg-opacity-50 hover:bg-opacity-50 p-2 m-1 cursor-pointer select-none shadow-cyan-700 shadow-sm items-center '>
                <div>
                    <img className="w-20 pointer-events-none" src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="account Logo" width={100} height={100} />
                </div>
                <div className='whitespace-nowrap '>
                    <p>{product.name}</p>
                    <p>{product.quantity}</p>
                    <p>${product.price}</p>
                </div>
                <ShowProductsModal duck={product.devices} >
                    <button className='btn m-3 rounded bg-cyan-400 bg-opacity-30'>
                        {product._count?.devices}
                    </button>
                </ShowProductsModal>
            </div>

        </>
    )
}

export default DeviceItem