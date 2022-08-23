import type { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { BsCalendar2, BsSearch } from 'react-icons/bs'
import { Layout } from '../../components/Layout'
import OrderList from '../../components/OrderList'
import { Modal } from '../../components/Util'
import prisma from '../../lib/prisma'

const Orc = ({ orders }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [orderz, setOrderz] = useState(orders)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    async function saveOrder(data: any) {
        const res = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return await res.json()
    }

    async function handeSave() {
        const orderData = await saveOrder(
            {
                title: "arka",
                authorId: 1,
                customerId: 1,
            }
        )
        setOrderz([orderData.data, ...orderz])
        setShow(false);
    }

    return (
        <Layout>
            <section className='m-2'>
                <div className='flex flex-wrap rounded-sm md:flex-row  justify-between items-center  bg-indigo-800 bg-opacity-20 w-full p-3 mb-2'>
                    <div className='flex flex-wrap justify-between w-full md:w-auto'>
                        <Modal visible={show} onClose={handleClose} title={'Order Form'} children={<>
                            <div>
                                <div>
                                    <label htmlFor="customer">Customer Name :</label>
                                    <select id="customer" name="customer" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
                                        <option value="1">arkan</option>
                                        <option value="2">alan</option>
                                        <option value="3">kamaran</option>
                                        <option value="4">karmand</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="product">Payment Method :</label>
                                    <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
                                        <option value="volvo">Odd</option>
                                        <option value="saab">Wholesale</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="product">Date & Time :</label>
                                    <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="datetime-local" />
                                </div>
                                <button className="btn float-right "
                                    onClick={handeSave}>add</button>
                            </div>
                        </>} />
                        <button className='btn flex-grow w-full m-1 sm:w-auto py-3' onClick={handleShow}>Add New Order</button>
                    </div>
                    <div className='relative m-1 flex-grow w-full md:w-auto z-0'>
                        <input className='input bg-opacity-70 w-full py-3' type="text" />
                        <button className="btn absolute top-0 py-3 rounded-r-md right-0"><BsSearch size={23} /></button>
                    </div>
                    <div className='flex items-center w-full md:w-auto m-1'>
                        <input className='input text-white flex-1 py-3 border-none' type="date" name="date" id="date" />
                        <span className='btn text-white py-3'><BsCalendar2 size={26} /></span>
                    </div>
                </div>
                <OrderList orderz={orderz} />
            </section>
        </Layout>
    )
}

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps(context: any) {
    const data = await prisma.order.findMany(
        {
            take: 4,
            skip: 1, // Skip the cursor
            orderBy: {
                id: 'desc',
            },
        }
    )

    //convert decimal value to string to pass through as json
    const orders = data.map((order: { createdAt: { toString: () => any } }) => ({
        ...order,
        createdAt: order.createdAt.toString(),
    }))
    return {
        props: { orders },
    }
}

export default Orc
