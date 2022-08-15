import type { NextPage, InferGetStaticPropsType } from 'next'
import { BsCalendar2 } from 'react-icons/bs'
import { Layout } from '../../components/Layout'
import OrderList from '../../components/OrderList'
import { AddOrderModal } from '../../components/Util'
import prisma from '../../lib/prisma'

const Orc: NextPage = ({orders}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <section className='p-4'>
                <div className='flex flex-col  md:flex-row  justify-between items-center my-4 mx-1 px-3 bg-blue-900 bg-opacity-10 '>
                    <div className='p-3 flex flex-wrap justify-between w-auto'>
                        {/* <div className="m-1"><AddOrderModal /></div> */}
                        <button className='btn m-1 bg-gray-600'>view all orders</button>
                    </div>
                    <div className='relative m-2 flex-grow w-full md:w-auto z-0'>
                        <input className='input w-full ' type="text" />
                        <button className="btn absolute top-0 rounded-r-md right-0">search</button>
                    </div>
                    <div className='md:w-auto flex flex-row items-center'>
                        <input className='input px-6 bg-white text-zinc-800  w-full border-none' type="date" name="date" id="date" />
                        <span className='btn bg-gray-800 rounded '><BsCalendar2 size={20} /></span>
                    </div>
                </div>
                <OrderList orderz={orders} />
            </section>
        </Layout>
    )
}

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps(context) {
    const data = await prisma.order.findMany()
  
    //convert decimal value to string to pass through as json
    const orders = data.map((order) => ({
      ...order,
      createdAt: order.createdAt.toString(),
    }))
    return {
      props: { orders },
    }
}

export default Orc
