import { XCircleIcon } from '@heroicons/react/solid';
import React, { useEffect, useRef } from 'react'
import { useState } from "react";
import { FaTruckLoading, FaCartPlus, FaRegPlusSquare } from 'react-icons/fa';

export const AddOrderModal = ({ saveOrder, userId }) => {
  const [customers, setCustomers] = useState([]);
  const [handleModal, setHandleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const customerRef = useRef()

  const getCustomers = () => {
    setLoading(true)
    return fetch('/api/customers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.data)
        setLoading(false)
      })
  }

  useEffect(() => {
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
      authorId: userId,
      customerId: customerRef.current?.value,
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
            <select id="customer" name="customer" className='w-3/4 m-1 p-2 rounded bg-gray-600' ref={customerRef}>
              {loading ? <select name="loading" id="0"><FaTruckLoading /></select> : customers.map((customer, i) => <option key={i} value={customer.id}>{customer.name}</option>)}
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



export const AddSaleModal = ({ saveOrder, userId }) => {
  const [customers, setCustomers] = useState([]);
  const [handleModal, setHandleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const customerRef = useRef()
  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }

  async function handleSave() {
    await saveOrder({
      title: "Cool helmet.",
      authorId: userId,
      customerId: customerRef.current?.value,
    })
    setHandleModal(false);
  }

  return (
    <>
      <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 m-1"
        onClick={setVisible}>
        <span className="relative inline-flex gap-2 items-center px-3 py-3 space-x-2 text-sm font-medium text-green-600 bg-gray-800 bg-opacity-40 hover:bg-opacity-100 border border-green-300 rounded-md sm:py-2">
          <div>
            <FaCartPlus />
          </div>
          <div className="hidden sm:block">
            فرۆش
          </div>
        </span>
      </button>

      <Modal visible={handleModal} onClose={handleClose} title={"زیادکردنی فرۆش"} >
        <div className='relative w-full flex flex-col'>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="customer">بکە</label>
            <select id="customer" name="customer" className='w-3/4 m-1 p-2 rounded bg-gray-600' ref={customerRef}>
              {loading ? <select name="loading" id="0"><FaTruckLoading /></select> : customers.map((customer, i) => <option key={i} value={customer.id}>{customer.name}</option>)}
            </select>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">ڤزیتۆر</label>
            <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              <option value="volvo">Odd</option>
              <option value="saab">Wholesale</option>
            </select>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">فرۆشگا</label>
            <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              <option value="volvo">Odd</option>
              <option value="saab">Wholesale</option>
            </select>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">رێکەوت</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="datetime-local" />
          </div>
          <button className="btn rounded-sm float-right "
            onClick={handleSave}>زیادکردن</button>
        </div>
      </Modal>
    </>
  )
}

export const AddProductModal = ({ saveOrder, userId }) => {
  const [customers, setCustomers] = useState([]);
  const [handleModal, setHandleModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const customerRef = useRef()
  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }

  async function handleSave() {
    await saveOrder({
      title: "Cool helmet.",
      authorId: userId,
      customerId: customerRef.current?.value,
    })
    setHandleModal(false);
  }

  return (
    <>
      <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 m-1"
        onClick={setVisible}>
        <span className="relative inline-flex gap-2 items-center px-3 py-3 space-x-2 text-sm font-medium text-green-600 bg-gray-800 bg-opacity-40 hover:bg-opacity-100 border border-green-300 rounded-md sm:py-2">
          <div>
            <FaRegPlusSquare />
          </div>
          <div className="hidden sm:block">
            کاڵا
          </div>
        </span>
      </button>

      <Modal visible={handleModal} onClose={handleClose} title={"زیادکردنی کاڵا"} >
        <div className='relative w-full flex flex-col'>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="customer">بکە</label>
            <select id="customer" name="customer" className='w-3/4 m-1 p-2 rounded bg-gray-600' ref={customerRef}>
              {loading ? <select name="loading" id="0"><FaTruckLoading /></select> : customers.map((customer, i) => <option key={i} value={customer.id}>{customer.name}</option>)}
            </select>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">کۆمپانیا</label>
            <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              <option value="volvo">Odd</option>
              <option value="saab">Wholesale</option>
            </select>
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">جۆر</label>
            <select id="product" name="product" className='w-3/4 m-1 p-2 rounded bg-gray-600'>
              <option value="volvo">Odd</option>
              <option value="saab">Wholesale</option>
            </select>
          </div>
          <hr className='my-2' />
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">ناو</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="text" />
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">کۆد</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="text" />
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">وەجبە</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="text" />
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">نرخ</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="text" />
          </div>
          <div className='flex flex-row justify-between items-baseline'>
            <label htmlFor="product">نسبە</label>
            <input name='product' className='w-3/4 m-1 p-2 rounded bg-gray-600' type="text" />
          </div>
          <hr className='my-2' />

          <button className="btn rounded-sm float-right "
            onClick={handleSave}>زیادکردن</button>
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


export const ShowProductsModal = ({ children, duck, productId, addCode }) => {
  const [handleModal, setHandleModal] = useState(false)

  const code = useRef()
  const price = useRef()

  const setVisible = () => {
    setHandleModal(true);
  }

  const handleClose = () => {
    setHandleModal(false);
  }
  async function saveDevice(data) {
    const res = await fetch('/api/devices', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      throw new Error(res.statusText)
    }
    return await res.json()
  }

  async function addDeviceHandler() {
    const res = await saveDevice({
      code: code.current?.value,
      price: price.current?.value,
      stock: true,
      productId: productId
    })
    handleClose()
    addCode(res.data)
  }

  return (
    <>
      <div onClick={setVisible}>{children}</div>

      <Modal visible={handleModal} onClose={handleClose} title={"Devices"} >
        <div className='flex flex-col text-sm scrollbar h-80 min-w-full w-full'>
          {duck?.map((bro) => (
            <div className='flex flex-row justify-between bg-slate-700 bg-opacity-30 hover:bg-opacity-100 border-l-2 p-3 w-full items-center '>
              <p className='mr-2  p-1'>{bro.code}</p>
              <p className='mr-2  p-1'>${bro.price
              } </p>
              {bro.stock ? <p className='bg-cyan-700 p-1 '>in stock</p> : <p className='bg-red-700 p-1'>out of stock</p>}
            </div>)
          )}
          <div className='flex flex-wrap w-full space-x-1'>
            <input className='input' type="text" placeholder='add code' ref={code} />
            <input className='input' type="text" placeholder='price' ref={price} />
            <button className='btn' onClick={addDeviceHandler}>add</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export const Modal = ({ visible, onClose, title, children }) => {
  if (!visible) return null;
  return (
    <div className='fixed top-0 right-0 w-full text-white inset-0 bg-black bg-opacity-30 backdrop-blur-sm  flex justify-center items-center z-10'>
      <div className='bg-gray-800 bg-opacity-80  hover:bg-opacity-100 p-2 m-2 pb-10 rounded w-fit h-auto'>
        <div className='flex flex-row justify-between  m-2'>
          <h3 className='text-yellow-50'>{title}</h3>
          <button className="bg-transparent" onClick={onClose}><XCircleIcon color='red' className='w-8 relative left-0 top-0' /></button>
        </div>
        {children}
      </div>
    </div>
  )
}
