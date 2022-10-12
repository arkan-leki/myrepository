import Link from "next/link"
import { FaEdit, FaFolderOpen, FaTrashAlt } from "react-icons/fa"

const TableRowItem = ({open}) => {
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
                <img
                    src='https://banner2.cleanpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg'
                    alt="Picture of the author"
                    // width={500}
                    // height={500}
                    className='w-10 '
                />
            </td>
            <td className="">
                iPhone 14
            </td>
            <td className="">
                $300
            </td>
            <td className="">
                24/2/2023
            </td>
            <td className="font-medium">
                <Link href={open}>
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

export default TableRowItem