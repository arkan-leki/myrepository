const TableRow = () => {
    return (
        <tr className='bg-neutral-800 bg-opacity-20 hover:bg-opacity-30'>
            <td className="py-3 pl-4">
                <div className="flex items-center h-5 m-1">
                    <input
                        type="checkbox"
                        className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                    />
                    <label
                        htmlFor="checkbox"
                        className="sr-only"
                    >
                        Checkbox
                    </label>
                </div>
            </td>
            <td className="font-medium">
                1
            </td>
            <td className="">
                iPhone 14
            </td>
            <td className="">
                $300
            </td>
            <td className="font-medium">
                <a className="text-green-500 hover:text-green-700"
                    href="#">
                    Edit
                </a>
            </td>
            <td className="font-medium">
                <a className="text-red-500 hover:text-red-700"
                    href="#">
                    Delete
                </a>
            </td>
        </tr>
    )
}

export default TableRow