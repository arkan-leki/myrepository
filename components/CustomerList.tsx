import { Customer } from '@prisma/client';
import React, { useState } from 'react'
import CustomerItem from "./CustomerItem";
import { AddCustomerModal } from './Util';

interface Props {
    InitialCustomers: Customer[]
}

const CustomerList = ({ InitialCustomers }: Props) => {
    const [customers, setCustomers] = useState(InitialCustomers)

    async function saveCustomer(data: any) {
        const res = await fetch('/api/customers', {
          method: 'POST',
          body: JSON.stringify(data)
        });
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return await res.json()
      }

    async function handeSave(data: any) {
        const orderData = await saveCustomer(data)
        setCustomers([...customers, orderData.data])
      }
    
    return (
        <>
            <div className="bg-gray-700 rounded-md flex flex-col justify-center w-full items-center">
                <div>
                    <h3 className="text-white font-bold py-3">Customer</h3>
                </div>
                <div className="w-full">
                    {customers.map((customer) => (
                        <CustomerItem key={customer.id} customer={customer} />
                    ))}
                </div>
                <div className="py-3 my-2 text-sm text-blue-700 flex w-full flex-row justify-evenly items-center ">
                    <div><AddCustomerModal saveCustomer={handeSave} /></div>
                    <div><a className="bg-zinc-600  hover:bg-gray-800 text-white p-2 rounded-md" href="#">View All Customers</a></div>
                </div>
            </div>
        </>
    )
}

export default CustomerList