import { Customer } from '@prisma/client';
import React from 'react'
import { BsBookmark, BsInfo, BsMapFill } from "react-icons/bs";
import { HiOutlineArrowCircleDown, HiOutlineXCircle, HiPhone} from "react-icons/hi";

interface Props {
    customer: Customer,
    Id: Number ,
    Index: Number | boolean,
    setIndex: any
}

const CustomerItem = ({ customer, Id, Index, setIndex }: Props) => {
    const HandleClick = () => {
        if (Id === Index) return setIndex(false)
        setIndex(Id)
    }

    return (
        <>
            <div className="border-gray-500 border-y-2  hover:bg-slate-700 cursor-pointer bg-slate-800 bg-opacity-50 flex flex-row justify-between items-center px-2" onClick={HandleClick}>
                <div className="m-2">
                    <img className="w-16 rounded-full" src="/arkan.jpg" alt="account Logo" />
                </div>
                <div className="m-2 text-lg flex-1 flex-col flex flex-wrap justify-evenly items-start">
                    <h4 className="whitespace-pre-wrap font-bold font-sans text-center">{customer.name}</h4>
                    <p className="pr-2 flex-row flex items-center justify-between"> <HiPhone className="m-2" /> 0770-999-8888</p>
                    <p className="pr-2 flex-row flex items-center justify-between"> <BsMapFill className="m-2" /> {customer.address}</p>
                </div>
                <div>
                    {(Index !== Id) ? (<HiOutlineArrowCircleDown size={30} />):<HiOutlineXCircle size={30} />}
                </div>

            </div>
            {Index === Id && (<div className='flex flex-row items-start justify-between bg-blue-900 bg-opacity-40 border-b-2 texts-center w-full'>
                <div className='m-7 text-lg'>
                    <p >Total : $300</p>
                    <p >Loan : $300</p>
                    <p >Paied : $300</p>
                </div>
                <div className="flex flex-col">
                    <button className="btn p-2 rounded m-4"><BsInfo /></button>
                    <button className="btn p-2 bg-red-500 rounded m-4"><BsBookmark /></button>
                </div>
            </div>)}
        </>
    )
}

export default CustomerItem