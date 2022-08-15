import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import DashBoard from '../components/Dashboard'
import prisma from '../lib/prisma'
import { Customer, Order } from '@prisma/client'

interface Props{
  orders : Order[],
  customers : Customer[]
}

const Home: NextPage = ({ orders, customers }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <div>
      <Head>
        <title>Hawa Phone 1.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Nav />
        <DashBoard InitialOrders={orders} InitialCustomers={customers} />
        
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}



// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const data = await prisma.order.findMany({
    take: 4,
    skip: 1, // Skip the cursor
    orderBy: {
      id: 'desc',
    },
  })

  const customers = await prisma.customer.findMany({
    take: 4,
    orderBy: {
      id: 'desc',
    },
  })
  
  //convert decimal value to string to pass through as json
  const orders = data.map((order) => ({
    ...order,
    createdAt: order.createdAt.toString(),
  }))
  return {
    props: { orders, customers },
  }
}


export default Home
