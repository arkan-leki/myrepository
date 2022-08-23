import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiCalendar, HiCurrencyDollar } from 'react-icons/hi'
import { Layout } from '../../components/Layout'
import { Modal } from '../../components/Util'

const Home = (props) => {
    const [show, setShow] = useState(false)

    const handleShow = () => { setShow(true) }
    const handleClose = () => { setShow(false) }

    return (
        <>
            <Layout>
                <Modal children={<div className='p-3 m-2'>
                    <div className='flex items-center mb-2'>
                        <label htmlFor="customer">Customer :</label>
                        <input type="text" name='customer' className='input mx-1 flex-1' placeholder='john simth' />
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="customer">Payments :</label>
                        <input type="number" name='customer' className='input mx-1 flex-1' placeholder='$000' />
                    </div>
                </div>}
                 visible={show} onClose={handleClose} title={'add new paymennts'} />
                <section>
                    <div className='p-3 bg-blue-800 bg-opacity-20 m-2 flex flex-wrap w-full'>
                        <button className='btn mx-1 my-2 mb-0 w-full sm:w-auto' onClick={handleShow}>Add New Payment</button>
                        <div className='flex flex-1 my-2 mx-1'>
                            <input type="text" name='customer' className='input rounded-sm flex-1 py-3' placeholder='john simth' />
                            <button className='btn'><BsSearch size={20} /></button>
                        </div>
                        <div className='flex items-center w-full sm:w-auto '>
                            <input type="date" className='input mx-1 rounded-none flex-1 py-3' />
                        </div>
                    </div>

                    <div className=' bg-slate-700 bg-opacity-40 m-2 pb-3'>
                        <div>
                            <h3 className="text-white font-bold p-3">Recent Payments</h3>
                        </div>
                        <div className="w-full">
                            <div className="border-gray-600 border-y-2 hover:bg-slate-700 cursor-pointer bg-slate-800 
                             bg-opacity-50 flex flex-row justify-between items-center px-2" >
                                <div className="m-2">
                                    <img className="w-16 rounded-full" src="/arkan.jpg" alt="account Logo" />
                                </div>
                                <div className="m-2 text-lg flex-1 flex-col flex flex-wrap justify-evenly items-start">
                                    <h4 className="whitespace-pre-wrap font-bold font-sans text-center">arkan@gazino</h4>
                                    <p className="pr-2 flex-row flex items-center justify-between"> <HiCalendar className="m-2" /> 3/4/2022 4:30</p>
                                </div>
                                <p className="pr-2 flex-row flex text-lg items-center justify-between btn bg-green-800 bg-opacity-80 rounded-lg"> <HiCurrencyDollar size={20} />300</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="border-gray-600 border-y-2 hover:bg-slate-700 cursor-pointer bg-slate-800 
                             bg-opacity-50 flex flex-row justify-between items-center px-2" >
                                <div className="m-2">
                                    <img className="w-16 rounded-full" src="/arkan.jpg" alt="account Logo" />
                                </div>
                                <div className="m-2 text-lg flex-1 flex-col flex flex-wrap justify-evenly items-start">
                                    <h4 className="whitespace-pre-wrap font-bold font-sans text-center">arkan@gazino</h4>
                                    <p className="pr-2 flex-row flex items-center justify-between"> <HiCalendar className="m-2" /> 3/4/2022 4:30</p>
                                </div>
                                <p className="pr-2 flex-row flex text-lg items-center justify-between btn bg-green-800 bg-opacity-80 rounded-lg"> <HiCurrencyDollar size={20} />300</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="border-gray-600 border-y-2 hover:bg-slate-700 cursor-pointer bg-slate-800 
                             bg-opacity-50 flex flex-row justify-between items-center px-2" >
                                <div className="m-2">
                                    <img className="w-16 rounded-full" src="/arkan.jpg" alt="account Logo" />
                                </div>
                                <div className="m-2 text-lg flex-1 flex-col flex flex-wrap justify-evenly items-start">
                                    <h4 className="whitespace-pre-wrap font-bold font-sans text-center">arkan@gazino</h4>
                                    <p className="pr-2 flex-row flex items-center justify-between"> <HiCalendar className="m-2" /> 3/4/2022 4:30</p>
                                </div>
                                <p className="pr-2 flex-row flex text-lg items-center justify-between btn bg-green-800 bg-opacity-80 rounded-lg"> <HiCurrencyDollar size={20} />300</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Home