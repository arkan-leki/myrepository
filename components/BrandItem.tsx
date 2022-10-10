import Image from 'next/image'
import React from 'react'
import { Brand } from '@prisma/client'


interface Props{
    brand: Brand
}

const BrandItem = ({ brand }: Props) => {
    return (
        <>
            <div className='relative flex flex-col min-w-fit w-40  bg-blue-800 bg-opacity-20 hover:bg-opacity-50 m-2 mr-3 rounded-md select-none'>
                <div>
                    <Image className="w-20 bg-white rounded pointer-events-none" src="/OIP.jpg" alt="account Logo" width={80} height={80} />
                </div>
                <div className='whitespace-nowrap '>
                    <p>{brand.name}</p>
                </div>
                <span className='absolute w-10 h-10 bg-red-600 rounded-full p-1 right-2 top-0'>{brand._count?.product}</span>
            </div>
        </>
    )
}

export default BrandItem