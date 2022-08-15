import Link from 'next/link';
import React, { useRef } from 'react'
import { useState } from "react";

export const AddOrderModal = ({ saveOrder, initialState = false }) => {
  const [handleModal, setHandleModal] = useState(false)
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
              <option value="1">arkan</option>
              <option value="2">alan</option>
              <option value="3">kamaran</option>
              <option value="4">karmand</option>
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
            <input className='w-full input m-1 p-2 rounded bg-gray-600' name='title' type="text" placeholder='name' ref={name}/>
          </div>
          <div className='w-3/4'>
            {/* <label htmlFor="address">Date & Time :</label> */}
            <input name='address' className='w-full input m-1 p-2 rounded bg-gray-600' type="emaol" placeholder='address' ref={adress}/>
          </div>
          <button className="btn float-right w-2/4 rounded "
            onClick={handleSave}>add</button>
        </div>
      </Modal>
    </>
  )
}

const Modal = ({ visible, onClose, title, children }) => {
  if (!visible) return null;
  return (
    <div className='fixed  text-white inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center'>
      <div className='bg-gray-800 p-2 m-2 pb-10 rounded w-auto h-auto'>
        <div className='flex flex-row justify-between  m-2'>
          <h3 className='text-yellow-50'>{title}</h3>
          <button className="btn p-1 rounded bg-transparent text-bold border" onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  )
}
