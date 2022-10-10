import Link from 'next/link';
import { FaBoxes, FaBoxOpen, FaCarAlt, FaCartArrowDown, FaCcAmazonPay, FaChartBar, FaHome , FaHouseUser, FaInbox, FaMoneyBill, FaMoneyBillWave, FaUsers} from 'react-icons/fa';
import AsideItem from './AsideItem'

const ASideBar = ({ sate }) => {
    return (
        <aside className={`z-10 fixed top-0 right-0 bottom-0 shadow-lg text-center bg-neutral-800 bg-opacity-30 h-full flex flex-col  ${sate ? 'w-0 hidden' : 'md:w-46 w-40 backdrop-blur '}`} >
            <a className="p-4 border-b border-slate-500">
                <span className="text-slate-100 font-bold text-xl">XanderApp 3</span>
            </a>
            <div className="mt-2 overflow-x-scroll scrollbar-thin scrollbar-thumb-transparent">
                <div className="p-4 text-white border-b border-slate-50 font-medium text-xl">Arkan Laki</div>
                <nav className="flex flex-col whitespace-nowrap list-none">
                    <ul className="flex-1 flex-col  whitespace-nowrap list-none ">
                        <AsideItem icon={<FaHome size={28} />} text={'ماڵەوە'} goto='/' />
                        <AsideItem icon={<FaCartArrowDown size={28} />} text={'فرۆشتنەکان'} goto='sales' />
                        <AsideItem icon={<FaBoxes size={28} />} text={'کۆگا'} goto='sales' />
                        <AsideItem icon={<FaBoxOpen size={28} />} text={'باری هاتوو'} goto='sales' />
                        <AsideItem icon={<FaMoneyBill size={28} />} text={'پارەی گەراوە'} goto='sales' />
                        <AsideItem icon={<FaMoneyBillWave size={28} />} text={'خەرجی'} goto='sales' />
                        <AsideItem icon={<FaUsers size={28} />} text={'کڕیاران'} goto='sales' />
                        <AsideItem icon={<FaCcAmazonPay size={28} />} text={'کۆمپانیاکان'} goto='sales' />
                        <AsideItem icon={<FaChartBar size={28} />} text={'ئامار'} goto='sales' />
                        <AsideItem icon={<FaCarAlt size={28} />} text={'گەراوە'} goto='sales' />
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default ASideBar