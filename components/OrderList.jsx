import React, { useState } from 'react'
import { ListItem } from "./ListItem";
import { AddOrderModal } from "./Util";

const OrderList = ({ orderz }) => {
  const [orders, setOrders] = useState(orderz);
  const [index, setIndex] = useState(false)

  async function saveOrder(order) {
    const res = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order)
    });
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  }

  async function handeSave(data) {
    const orderData = await saveOrder(data)
    setOrders([...orders, orderData.data])
  }

  return (
    <div className="text-white bg-gray-700 flex flex-wrap justify-center rounded-lg">
      <div className="py-3 text-xl font-bold">
        <h3 className="float-left text-lg m-0">Recent Slases</h3>
      </div>
      {orders && orders.map((order, i) => (
        <ListItem key={order.id} order={order} Id={i} setIndex={setIndex} Index={index}  />
      ))}
      <div className="py-3 text-blue-700 flex w-full flex-row justify-evenly items-center ">
        <div><AddOrderModal saveOrder={handeSave} /></div>
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