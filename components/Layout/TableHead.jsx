import React from 'react'

const TableHead = ({ rows }) => {
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
                <th scope="col">
                    دەستکاری
                </th>
                <th scope="col">
                    سڕینەوە
                </th>
            </tr>
        </thead>
    )
}

export default TableHead