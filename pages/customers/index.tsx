import type { InferGetStaticPropsType } from 'next'
import { BsCalendar2, BsSearch } from 'react-icons/bs'
import CustomerList from '../../components/CustomerList'
import { Layout } from '../../components/Layout'
import prisma from '../../lib/prisma'

const Home = ({ customers }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <section className='m-2'>
                <div className=' bg-blue-800 bg-opacity-20 my-2 p-3 flex flex-wrap w-full'>
                    <button className='btn mx-1 my-2 mb-0 w-full sm:w-auto' >Add New Customer</button>
                    <div className='flex flex-1 my-2 mx-1'>
                        <input type="text" name='customer' className='input rounded-sm flex-1 py-3' placeholder='john simth' />
                        <button className='btn'><BsSearch size={20} /></button>
                    </div>
                    <div className='flex items-center w-full sm:w-auto '>
                        <input type="date" className='input mx-1 rounded-none flex-1 py-3' />
                    </div>
                </div>
{/* 
                <div className='flex flex-col  md:flex-row  justify-between items-center my-4 mx-1 px-3 bg-blue-900 bg-opacity-10 '>
                    <div className='relative m-2 flex-grow w-full md:w-auto z-0'>
                        <input className='input w-full ' type="text" />
                        <button className="btn absolute top-0 rounded-r-md right-0">search</button>
                    </div>
                </div> */}
                <CustomerList InitialCustomers={customers} />
            </section>
        </Layout>
    )
}

// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
    const customers = await prisma.customer.findMany()

    return {
        props: { customers },
    }
}

export default Home
