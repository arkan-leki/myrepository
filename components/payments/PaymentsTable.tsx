import React from 'react'
import TableRow from '../sales/TableRowSales';
import TableHead from '../table/TableHead'

const PaymentsTable = () => {
    const [orders, setOrders] = React.useState([1, 2, 4]);
    async function handeSave(data: number) {
        setOrders([...orders, data])
    }
    return (
        <div className="p-2 w-full inline-block align-middle" dir='rtl'>
            <div className="overflow-auto scrollbar-thin border border-gray-500 rounded-lg">
                <table>
                    <TableHead rows={[' بنکەی فرۆش', 'کڕیار', 'پارەی دراو ', 'رێکەوت']} />
                    <tbody className="divide-y divide-gray-200">
                        {orders?.map((order, i) => (
                            <TableRow key={i} open={`/payments`} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentsTable