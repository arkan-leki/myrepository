import Head from 'next/head'
import React, { useRef, useState } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Image from 'next/image'
import BrandItem from '../components/BrandItem'
import DeviceItem from '../components/DeviceItem'
import { BsPlusCircle, BsSearch } from 'react-icons/bs'
import { Modal } from '../components/Util'
import { Brand, PrismaClient, Product } from '@prisma/client'
import { InferGetStaticPropsType } from "next";
import BrandList from '../components/BrandList'

const prisma = new PrismaClient()

interface Props {
  brands: Brand[]
  products: Product[]

}

const collections = ({ brands, products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [show, setShow] = useState(false)
  const handleClose = () => { setShow(false) }
  const handleOpen = () => { setShow(true) }
  const [productz, setproductz] = useState(products)
  const modelref = useRef()
  const brandid = useRef()
  const price = useRef(0)

  async function saveProduct(data: any) {
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  }

  async function handleSave() {
    let saveData = await saveProduct({
      name: modelref.current?.value,
      price: price.current?.value,
      quantity: 20.0,
      brandId: Number(brandid.current?.value),
    })
    setproductz([...productz, saveData.data])
    handleClose()
  }

  return (
    <div>
      <Head>
        <title>Hawa Phone 1.2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Nav />
        <section>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center  text-lg p-2 w-full text-center'>
              <BrandList brands={brands} />

              <div className=' bg-blue-800 bg-opacity-20 my-2 p-3 flex flex-wrap w-full'>
                <button className='btn mx-1 my-2 mb-0 w-full sm:w-auto' onClick={handleOpen}>Add New Device</button>
                <div className='flex flex-1 my-2 mx-1'>
                  <input type="text" name='customer' className='input rounded-sm flex-1 py-3' placeholder='mobile name' />
                  <button className='btn'><BsSearch size={20} /></button>
                </div>
              </div>

              <div className='w-full'>
                <h3 className='text-lg font-bold text-white p-3'>Devices</h3>
                <div className='flex flex-wrap space-x-4 space-y-3 p-3 bg-indigo-800 bg-opacity-20 w-full justify-evenly'>
                  {productz.map((product, i) => (
                    <DeviceItem key={i} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal visible={show} onClose={handleClose} title={'Product Form'} children={<>
          <div className='flex flex-col w-80 items-center'>
            <div className='w-3/4'>
              {/* <input className='w-full input m-1 p-2 rounded bg-gray-600' name='title' type="text" placeholder='brand' /> */}
              <select className='w-full input m-1 p-2 rounded bg-gray-600' name="brands" id="b" ref={brandid}>
                {brands.map((brand, i) => (
                  <option key={i} value={brand.id}>{brand.name}</option>
                ))}
              </select>
            </div>
            <div className='w-3/4'>
              <input name='model' className='w-full input m-1 p-2 rounded bg-gray-600' type="text" placeholder='model' ref={modelref} />
            </div>
            <div className='w-3/4'>
              <input name='price' className='w-full input m-1 p-2 rounded bg-gray-600' type="number" placeholder='$200' ref={price} />
            </div>
            <div className='w-3/4'>
              <input name='image' className='w-full input m-1 p-2 rounded bg-gray-600' type="file" placeholder='image' />
            </div>
            <button className="btn  float-right w-2/4 rounded bg-green-800 hover:bg-green-600" onClick={handleSave}>save</button>
          </div>
        </>} />

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}


// Fetch all posts (in /pages/index.tsx)
export async function getStaticProps() {
  const brands = await prisma.brand.findMany(
    {
      include: {
        _count: {
          select: { product: true },
        },
      },
    }
  )
  const data = await prisma.product.findMany({
    include: {
      devices: true,
      _count: {
        select: { devices: true },
      },
    },
  })

  // convert decimal value to string to pass through as json
  const products = data.map((product) => ({
    ...product,
    price: product.price.toString(),
    quantity: product.quantity.toString(),
  }))
  return {
    props: { brands, products },
  }
}

export default collections