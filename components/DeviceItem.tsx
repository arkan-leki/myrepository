import { Product } from '@prisma/client'
import React, { useState } from 'react'
import { ShowProductsModal } from './Util'

interface Props {
    product: Product | any
}

const DeviceItem = ({ product }: Props) => {
    const [posts, setPosts] = useState(product?.devices)
    const [counter, setcounter] = useState(product?._count?.devices)

    function addNew(data: any) {
        setPosts([...posts, data])
        setcounter(counter + 1)
    }

    return (
        <>
            <div className='flex flex-col w-36 min-w-max bg-slate-800 bg-opacity-50 hover:bg-opacity-50 p-2 m-1 cursor-pointer select-none shadow-cyan-700 shadow-sm items-center '>
                <div>
                    <img className="w-20 pointer-events-none" src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="account Logo" width={100} height={100} />
                </div>
                <div className='whitespace-nowrap '>
                    <p>{product.name}</p>
                    <p>{product.quantity}</p>
                    <p>${product.price}</p>
                </div>
                <ShowProductsModal duck={posts} productId={product.id} addCode={addNew} >
                    <button className='btn m-3 w-16 rounded bg-cyan-400 bg-opacity-30'>
                        {counter}
                    </button>
                </ShowProductsModal>
            </div>

        </>
    )
}

export default DeviceItem