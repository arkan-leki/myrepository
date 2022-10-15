import React from 'react'

interface Props {
    rows: any;
}

const TableHeadCustomerOrder = ({ rows }:Props) => {
    return (
        <thead className="">
            <tr>
                <th scope="col" className="py-3 pl-4">
                    <div className="flex items-center h-5 m-1">
                        <input
                            id="checkbox-all"
                            type="checkbox"
                            className="text-blue-600 border-gray-400 rounded focus:ring-blue-500"
                        />
                        <label
                            htmlFor="checkbox"
                            className="sr-only"
                        >
                            Checkbox
                        </label>
                    </div>
                </th>
                {rows?.map((row, i) => (
                    <th scope="col" key={i}>
                        {row}
                    </th>))}
                {/* <th className='print:hidden' scope="col">
                    پیشاندان
                </th>
                <th className='print:hidden' scope="col">
                    پارەدان
                </th>
                <th className='print:hidden' scope="col">
                    گرانەوە
                </th> */}
            </tr>
        </thead>
    )
}

export default TableHeadCustomerOrder