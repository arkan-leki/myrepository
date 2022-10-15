import React from 'react'
import TableHead from '../table/TableHead'
import { FaFilter, FaSearch } from 'react-icons/fa'
import CustomerOrderedRecord from './CustomerOrderedRecord';

const CustomerOrderedView = () => {
    const [items, setItems] = React.useState([1, 2, 4]);
    async function handeSave(data: any) {
        setItems([...items, data])
    }
    return (
        <div>
            <div className="flex justify-between items-center py-3 pl-2">
                <h3 className='text-lg font-bold'> {'iPhone 8'} فرۆشتنەکان</h3>
                <div className="flex-1 relative max-w-xs">
                    <label htmlFor="hs-table-search" className="sr-only">
                        گەڕان
                    </label>
                    <input
                        type="text"
                        name="hs-table-search"
                        id="hs-table-search"
                        className="block w-full p-3 pl-10 text-xs border-gray-100 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-900 bg-opacity-60 hover:bg-opacity-100 dark:border-gray-700 dark:text-gray-400"
                        placeholder="گەڕان..."
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <FaSearch />
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 m-1">
                            <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                <div>
                                    <FaFilter />
                                </div>
                                <div className="hidden sm:block">
                                    فلتەر
                                </div>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-1.5 w-full inline-block align-middle" dir='rtl'>
                <div className="overflow-auto scrollbar-thin border border-gray-500 rounded-lg">
                    <table>
                        <TableHead rows={['وەسڵ', 'کریار', 'دانە', 'نرخ', 'رێکەوت']} />
                        <tbody className="divide-y divide-gray-200">
                            {items?.map((item, i) => (
                                <CustomerOrderedRecord data={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CustomerOrderedView