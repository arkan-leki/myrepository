import { Customer } from '@prisma/client';
import Image from 'next/image';
import React from 'react'
import { BsBookmark, BsInfo, BsMapFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";

interface Props{
    customer : Customer
}

const CustomerItem = ({customer}: Props) => {
    return (
        <>
            <div className="border-gray-500 border-y-2  hover:bg-slate-700 cursor-pointer bg-slate-800 bg-opacity-50 flex flex-row items-center px-2">
                <div className="m-2">
                    <Image className="w-20 rounded-full" src="/arkan.jpg" alt="account Logo" width={100} height={100}/>
                    <h4 className="whitespace-pre-wrap font-bold font-sans text-center">{customer.name}</h4>
                </div>
                <div className="m-2 text-base flex-grow flex flex-wrap justify-evenly items-center">
                    <div>
                        <p className="pr-2">Total : $300</p>
                        <p className="pr-2">Loan : $300</p>
                        <p className="pr-2">Paied : $300</p>
                    </div>
                    <div>
                        <p className="pr-2 flex-row flex items-center justify-between"> <HiPhone className="m-2" /> 0770-999-8888</p>
                        <p className="pr-2 flex-row flex items-center justify-between"> <BsMapFill className="m-2" /> {customer.address}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <button className="btn p-2 rounded m-4"><BsInfo /></button>
                    <button className="btn p-2 bg-red-500 rounded m-4"><BsBookmark /></button>
                </div>
            </div>
        </>
    )
}

export default CustomerItem