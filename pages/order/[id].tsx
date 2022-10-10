import { Order, Product } from '@prisma/client';
import { BsHash, BsPrinter } from 'react-icons/bs';
import { Layout } from '../../components/Layout'
import { NextPageContext, NextPage, InferGetServerSidePropsType } from "next";
import React, { useState } from 'react';
import ProductOnOrder from '../../components/ProductOnOrder';
import { HiOutlineXCircle, HiQrcode, HiXCircle } from 'react-icons/hi';
import PostsOnOrder from '../../components/PostsOnOrder';
import { useRouter } from 'next/router';

interface Props {
  order: Order
  products: Product[]
}

const OrderPage = ({ order, products }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [posts, setPosts] = useState(order?.products)
  const router = useRouter()

  async function saveOrder(order: any) {
    const res = await fetch(`http://localhost:3000/api/orders/${router.query.id}`, {
      method: 'POST',
      body: JSON.stringify(order)
    });
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  }

  async function addPost(data: any) {
    const orderData = await saveOrder(data)
    setPosts([...posts, orderData.data])
  }

  return (
    <>
      <Layout>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-col'>
            <div className='m-2 p-2 px-10 bg-white rounded text-white bg-opacity-10 flex flex-row  items-center'>
              <div className='flex-grow'>
                <p>Order ID: #{order.id}</p>
              </div>
              <div>
                <button className="btn hover:bg-slate-200 bg-slate-300 text-zinc-700 rounded flex flex-row items-center"><BsPrinter size={15} /><span >Invoice</span></button>
              </div>
            </div>
            <div className='m-2 p-2 px-10 bg-white rounded text-white bg-opacity-10 flex flex-row items-center'>
              <div className='flex-grow'>
                <p>Date: {new Date(order.createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}</p>
              </div>
              <div className='ml-2'>
                <p>Auther: @{order.authorId}</p>
              </div>
            </div>
            <div className='mb-1 m-2 p-2 px-10 bg-white rounded text-white bg-opacity-10 flex flex-col items-center'>
              {posts?.map((post: { price: any; quantity: any; total: any; postId: any; productId: number; },i) =>
                <PostsOnOrder key={i} post={{
                  price: post.price,
                  quantity: post.quantity,
                  total: post.total,
                  postId: post.postId,
                  product: Object.values(products.filter((product: Product) => product.id === post.productId)).map((val) => val.name)
                }} />
              )}
            </div>
            <div className='m-2 p-2 px-10 bg-white rounded text-white bg-opacity-10 '>
              <h3>Order Summary</h3>
              <div className='flex flex-row justify-between items-center border-b-2 border-geay-600 pb-7 mb-2'>
                <div>
                  <p>Subtotal:</p>
                  <p>Discount:</p>
                </div>
                <div>
                  <p>$540</p>
                  <p>$540</p>
                </div>
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p>Total:</p>
                <p> $2000</p>
              </div>
            </div>

          </div>
          <div className='flex-grow flex flex-col  justify-center w-80'>
            <div className='m-2 p-2 px-4 bg-white rounded text-white bg-opacity-10'>
              <div className='flex flex-col items-start ml-2'>
                <h3>add New Product</h3>
                <div className='my-2 flex items-center flex-row '>
                  <span className='btn rounded-l'><BsHash size={23} /></span>
                  <input className='text-center py-2 rounded input  hover:border-0' placeholder='inter item code' type="text" name="" id="" />
                  <button className='btn rounded-r'><HiQrcode size={23} /></button>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className='m-2 bg-white rounded text-white bg-opacity-10'>
              <div className='flex flex-col items-center'>
                <div className="py-3 font-bold">
                  <h3 className="float-left m-0">Products</h3>
                </div>
                <div className='flex flex-wrap justify-evenly w-full'>
                  {products?.map((product) =>
                    <ProductOnOrder key={product.id} postId={order.id} product={product} addProductHandler={addPost} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div> 
      </Layout>
    </>
  )
}

// Fetch all posts (in /pages/index.tsx)
export async function getServerSideProps(context: NextPageContext) {
  const res = await fetch(`http://localhost:3000/api/orders/${context.query.id}`);
  const data = await res.json()

  const order: Order = data.order
  const products: Order = data.products

  return {
    props: { order, products },
  }
}

export default OrderPage