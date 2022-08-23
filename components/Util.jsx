import Link from 'next/link';
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { FaTruckLoading } from 'react-icons/fa';

export const AddOrderModal = ({ saveOrder, initialState = false }) => {
  const [customers, setCustomers] = useState([]);
  const [handleModal, setHandleModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const getCustomers = () => {
    setLoading(true)
    return fetch('http://localhost:3000/api/customers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.data)
        setLoading(false)
      })
  }

  useEffect( () => {
    getCustomers()
    console.log(customers);
  }, [])


  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }

  async function handleSave() {
    await saveOrder({
      title: "Cool helmet.",
      authorId: 1,
      customerId: 1,
    })
    setHandleModal(false);
  }

  return (
    <>
      <button className='btn rounded' onClick={setVisible}>Place New Order</button>

      <Modal visible={handleModal} onClose={handleClose} title={"Add New Order"} >
        <div>
          <div>
            <label htmlFor="customer">Customer Name :</label>
            <select id="customer" name="customer" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              {loading ? <select name="loading" id="0"><FaTruckLoading /></select> : customers.map((customer,i) => <option key={i} value={customer.id}>{customer.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="product">Payment Method :</label>
            <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              <option value="volvo">Odd</option>
              <option value="saab">Wholesale</option>
            </select>
          </div>
          <div>
            <label htmlFor="product">Date & Time :</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="datetime-local" />
          </div>
          <button className="btn float-right "
            onClick={handleSave}>add</button>
        </div>
      </Modal>
    </>
  )
}

export const AddCustomerModal = ({ saveCustomer, initialState = false }) => {
  const [handleModal, setHandleModal] = useState(false)

  const name = useRef()
  const adress = useRef()


  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }

  async function handleSave() {
    await saveCustomer({
      name: name.current?.value,
      address: adress.current?.value,
    })
    setHandleModal(false);
  }

  return (
    <>
      <button className='btn rounded' onClick={setVisible}>Place New Customer</button>

      <Modal visible={handleModal} onClose={handleClose} title={"Add New Order"} >
        <div className='flex flex-col  w-80 items-center'>
          <div className='w-3/4'>
            {/* <label htmlFor="customer">Customer Name :</label> */}
            <input className='w-full input m-1 p-2 rounded bg-gray-600' name='title' type="text" placeholder='name' ref={name} />
          </div>
          <div className='w-3/4'>
            {/* <label htmlFor="address">Date & Time :</label> */}
            <input name='address' className='w-full input m-1 p-2 rounded bg-gray-600' type="emaol" placeholder='address' ref={adress} />
          </div>
          <button className="btn float-right w-2/4 rounded "
            onClick={handleSave}>add</button>
        </div>
      </Modal>
    </>
  )
}


export const ShowProductsModal = ({ children, duck }) => {
  const [handleModal, setHandleModal] = useState(false)

  const name = useRef()
  const adress = useRef()


  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }

  return (
    <>
      <div onClick={setVisible}>{children}</div>

      <Modal visible={handleModal} onClose={handleClose} title={"Devices"} >
        <div className='flex flex-col text-sm scrollbar h-80 min-w-full w-80'>
          {duck?.map((bro) => (
            <div className='flex flex-row justify-between bg-slate-700 bg-opacity-30 hover:bg-opacity-100 border-l-2 p-3 w-full items-center '>
              <p className='mr-2  p-1'>{bro.code}</p>
              <p className='mr-2  p-1'>$340 </p>
              {bro > 0 ? <p className='bg-cyan-700 p-1 '>in stock</p> : <p className='bg-red-700 p-1'>out of stock</p>}
            </div>)
          )}
        </div>
      </Modal>
    </>
  )
}

export const Modal = ({ visible, onClose, title, children }) => {
  if (!visible) return null;
  return (
    <div className='fixed  text-white inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center z-10'>
      <div className='bg-gray-800 bg-opacity-80 hover:bg-opacity-100 p-2 m-2 pb-10 rounded w-auto h-auto'>
        <div className='flex flex-row justify-between  m-2'>
          <h3 className='text-yellow-50'>{title}</h3>
          <button className="btn p-1 rounded bg-transparent text-bold border" onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  )
}
