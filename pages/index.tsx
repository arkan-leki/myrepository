import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Header from '../components/Layout/Header'
import ASideBar from '../components/Layout/ASideBar'
// import prisma from '../lib/prisma'
import { Customer, Order, PrismaClient } from '@prisma/client'
import Dashpool from '../components/Dashpool'
import Layout from '../components/Layout'

const prisma = new PrismaClient()

interface Props {
  orders: Order[],
  customers: Customer[]
}

const Home = ({ orders, customers }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      <Layout children={<Dashpool  />} />
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
    total: order.total.toString(),
    createdAt: order.createdAt.toString(),
  }))
  return {
    props: { orders, customers },
  }
}


export default Home
