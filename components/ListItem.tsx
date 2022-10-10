import { Order } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { BsArrowDown, BsArrowLeft, BsArrowRight, BsBookmark, BsInfo } from 'react-icons/bs'

interface Props{
    order: Order,
    Id: Number,
    Index: Number,
    setIndex: (arg0: any)=> {}
}

export const ListItem = ({ order, Id, Index, setIndex }:Props) => {
    const HandleClick = () => {
        if (Id === Index) return setIndex(false)
        setIndex(Id)
    }
    return (
        <>
            <div className=" border-gray-500 hover:bg-slate-700 cursor-pointer bg-slate-800 bg-opacity-50 border-y-2 flex flex-row w-full items-center" onClick={HandleClick}>
                <div className=" m-2 h-auto ">
                    <p className="font-bold whitespace-nowrap font-sans"><b>{order.title}</b></p>
                    {/* <img src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="image" /> */}
                </div>
                <div className='flex-1 flex-col justify-between items-center space-y-2 m-2 '>
                    <div className="flex flex-wrap">
                        <p className='mx-2'>Date : {
                            new Date(order.createdAt).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                            })}</p>
                        <p>Total: $400</p>
                        {/* <span className='bg-red-500 rounded-lg p-1 text-center '>deleted</span> */}
                    </div>
                </div>
                <div className='flex flex-col m-2 space-y-2 mr-2  items-center'>
                    <Link href={`order/${order.id}`}><button className="p-2 bg-cyan-700 text-white border-none font-bold rounded-md hover:bg-cyan-500"><BsArrowRight /></button></Link>
                </div>
            </div>
            {Index === Id && (<div className='flex flex-row items-start justify-between bg-blue-900 bg-opacity-20 border-b-2 texts-center w-full'>
                <div className='m-3 text-lg'>
                    <p>Customer : mamosta muhamad</p>
                    <p>Seller : Aeub amin</p>
                    <p>Total : $400</p>
                    <p>Paied : $300</p>
                    {/* <p className=''>Date : {
                        new Date(order.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}</p> */}
                </div>
                <div className="flex flex-col">
                    <button className="btn p-2 bg-red-600 rounded m-3"><BsInfo /></button>
                    <button className="btn p-2 bg-orange-600 rounded m-3"><BsBookmark /></button>
                </div>
            </div>)}
        </>
    )
}
