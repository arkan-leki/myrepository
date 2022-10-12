import Link from "next/link"
import { FaEdit, FaFolderOpen, FaTrashAlt } from "react-icons/fa"

const ItemOrderedRecord = ({ data }) => {
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
                {data}
            </td>
            <td className="">
                hawal phone
            </td>
            <td className="">
                22
            </td>
            <td className="">
                $300
            </td>
            <td className="">
                24/2/2023
            </td>
            <td className="font-medium">
                <Link href={`/sales/${data}`}>
                    <FaFolderOpen className="text-cyan-500 hover:text-cyan-700 hover:cursor-pointer" />
                </Link>
            </td>

            <td className="font-medium">
                <FaEdit className="text-green-500 hover:text-green-700 hover:cursor-pointer" />
            </td>

            <td className="font-medium">
                <FaTrashAlt className="text-red-500 hover:text-red-700 hover:cursor-pointer" />
            </td>
        </tr>
    )
}

export default ItemOrderedRecord