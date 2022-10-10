import { Order } from '@prisma/client';
import React, { useEffect, useState } from 'react'
import { ListItem } from "./ListItem";
import { AddSaleModal } from "./Util";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import jwt from 'jsonwebtoken'

interface Props{
  orderz: Order[],
}

const OrderList = ({ orderz }:Props) => {
  const [orders, setOrders] = useState(orderz);
  const [index, setIndex] = useState(false)
  const [user, setUser] = useState()

  async function saveOrder(order: any) {
    const res = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order)
    });
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  }

  async function handeSave(data: any) {
    const orderData = await saveOrder(data)
    setOrders([...orders, orderData.data])
  }

  useEffect(() => {
    let token = getCookie('token')
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string }
      setUser(json.id)
      console.log(json);
    }
  }, [])

  return (
    <div className="text-white bg-gray-700 flex flex-wrap justify-center rounded-lg">
      <div className="py-3 text-xl font-bold">
        <h3 className="float-left text-lg m-0">Recent Slases</h3>
      </div>
      {orders?.map((order, i) => (
        <ListItem key={order.id} order={order} Id={i} setIndex={setIndex} Index={index}  />
      ))}
      <div className="py-3 text-blue-700 flex w-full flex-row justify-evenly items-center ">
        <div><AddSaleModal saveOrder={handeSave} userId={user} /></div>
        <div><a className="bg-gray-400 hover:bg-gray-800 text-white p-2 rounded-md" href="#">View All Orders</a></div>
      </div>
    </div>
  )
}

// export async function getStaticProps(context) {
//   const data = await prisma.order.findMany()

//   //convert decimal value to string to pass through as json
//   const orders = data.map((order) => ({
//     ...order,
//     createdAt: order.createdAt.toString(),
//   }))
//   return {
//     props: { orderz: orders },
//   }
// }

export default OrderList