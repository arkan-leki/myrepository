import Link from 'next/link'
import React from 'react'

export const ListItem = ({ order }) => {
    return (
        <Link href={`order/${order.id}`}>
            <div className=" border-gray-500 hover:bg-slate-700 cursor-pointer bg-slate-800 bg-opacity-50 border-y-2 flex flex-row w-full items-center ">
                <div className=" m-3 w-20 h-auto ">
                    <p className="font-bold whitespace-nowrap font-sans"><b>{order.title}</b></p>
                    <img src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="image" />
                </div>
                <div className='flex-1 justify-between items-center space-y-2 m-2 text-sm'>
                    <div className="flex flex-wrap">
                        <p className='mx-2'>{order.customerId}</p>
                        <p className='mx-2'>{order.createdAt}</p>
                    </div>
                </div>
                <div className='flex flex-col space-y-4 mr-2 text-sm'>
                    <p className='bg-cyan-500 rounded-lg text-center py-2 '>$400</p>
                    {/* <button className="p-2 bg-cyan-700 text-white border-none font-bold rounded-md hover:bg-cyan-500">more info</button> */}
                    <span className='bg-red-500 rounded-lg p-2 text-center '>deleted</span>
                </div>
            </div>
        </Link>
    )
}
