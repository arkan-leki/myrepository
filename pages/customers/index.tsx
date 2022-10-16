import React from 'react'
import CustomerList from '../../components/customers/CustomerList'
import Layout from '../../components/Layout'
import prisma from '../../lib/prisma'
import Home from './indexs'
import { InferGetStaticPropsType } from "next";

const index = ({customers}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
        <div className='hidden sm:block w-full'><CustomerList /></div>
        <div className="sm:hidden">
        <Home customers={customers} />
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const customers = await prisma.customer.findMany()

  return {
      props: { customers },
  }
}

export default index