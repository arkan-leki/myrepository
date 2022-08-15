
import { Widget } from "./Widget";
import OrderList from './OrderList'
import { Customer, Order } from "@prisma/client";
import CustomerList from "./CustomerList";

interface Props{
    InitialOrders : Order[],
    InitialCustomers : Customer[]
  }

const Dashboard = ({ InitialOrders , InitialCustomers }: Props) => {
    return (
        <div className='px-5 my-5 flex flex-col justify-center items-center h-full'>
            <Widget />
            <div className="my-5" />
            <div className="grid lg:grid-cols-2 gap-5">
                <div><OrderList orderz={InitialOrders} /></div>
                <div>
                    <CustomerList InitialCustomers={InitialCustomers} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard