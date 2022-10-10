import { MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { BsCartPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaBoxes, FaCalculator, FaDollarSign, FaFire, FaPoo } from 'react-icons/fa';
import SidebarItem from '../components/SidebarItem'

const Nav = () => {
    const [state, setState] = useState(true);
    const handleState = () => {
        setState(!state)
    }
    return (
        <>
            <div hidden={state}>
                <nav className='fixed z-10 top-40 right-0 bg-gray-900 opacity-90 h-auto w-16
         text-white m-0 flex flex-col shadow-lg py-5 rounded-l-3xl '>
                    <SidebarItem icon={<FaCalculator size={28} />} text={'home'} goto='/' />
                    <SidebarItem icon={<BsCartPlus size={32} />} text={'orders'} goto='/orders' />
                    <SidebarItem icon={<FaDollarSign size={20} />} />
                    <SidebarItem icon={<FaBoxes size={20} />} />
                </nav>
            </div>
            <button className="fixed bottom-2 right-2 btn bg-orange-600 rounded-full" onClick={handleState}><MenuIcon className='h-5 m-1 group-hover:animate-bounce' /></button>
        </>
    )
}

export default Nav