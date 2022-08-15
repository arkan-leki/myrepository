import type { InferGetStaticPropsType } from 'next'
import { BsCalendar2 } from 'react-icons/bs'
import CustomerList from '../../components/CustomerList'
import { Layout } from '../../components/Layout'
import prisma from '../../lib/prisma'

const Home = ({customers}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <section className='p-4'>
                <div className='flex flex-col  md:flex-row  justify-between items-center my-4 mx-1 px-3 bg-blue-900 bg-opacity-10 '>
                    <div className='relative m-2 flex-grow w-full md:w-auto z-0'>
                        <input className='input w-full ' type="text" />
                        <button className="btn absolute top-0 rounded-r-md right-0">search</button>
                    </div>
                </div>
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
