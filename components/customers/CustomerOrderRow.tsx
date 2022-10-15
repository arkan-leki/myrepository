import { FaFolderOpen, FaMoneyCheck, FaShoppingBasket } from 'react-icons/fa'

interface Props {
    data: Number;
}

const CustomerOrderRow = ({data}:Props) => {
    return (
        <>
            <tr className='bg-neutral-800 bg-opacity-40 font-medium hover:bg-opacity-30'>
                <td className="py-3 pl-4">
                    {data}
                </td>
                <td className="py-3 pl-4">
                    234
                </td>
                <td className="py-3 pl-4">
                    موبایل
                </td>
                <td className="py-3 pl-4">
                    $8,800.00
                </td>
                <td className="py-3 pl-4">
                    $00.00
                </td>
                <td className="py-3 pl-4">
                    $00.00
                </td>
                <td className="py-3 pl-4">
                    2022-09-07
                </td>
                <td className="py-3 pl-4">
                    $8,800.00
                </td>

                {/* <td className="font-medium py-3 pl-4 print:hidden">
                    <FaFolderOpen className="text-cyan-500 hover:text-cyan-400 hover:cursor-pointer" />
                </td>

                <td className="font-medium py-3 pl-4 print:hidden">
                    <FaMoneyCheck className="text-green-500 hover:text-green-400 hover:cursor-pointer" />
                </td>

                <td className="font-medium py-3 pl-4 print:hidden">
                    <FaShoppingBasket className="text-red-500 hover:text-red-400 hover:cursor-pointer" />
                </td> */}
            </tr>
        </>
    )
}

export default CustomerOrderRow