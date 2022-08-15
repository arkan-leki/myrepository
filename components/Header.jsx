import HeaderItem from './HeaderItem'
import { HomeIcon, ShoppingCartIcon, SearchIcon, UserIcon, ViewGridAddIcon, TruckIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <div className='flex flex-1 flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} goto={'/'} />
                <HeaderItem title='ORDERS' Icon={ShoppingCartIcon} goto={'/orders'} />
                <HeaderItem title='PAYMENTS' Icon={CurrencyDollarIcon} />
                <HeaderItem title='COLLECTIONS' Icon={ViewGridAddIcon} goto={'/collections'} />
                <HeaderItem title='CUSTOMERS' Icon={UsersIcon} goto={'/customers'}  />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <h1 className='object-contain bg-clip-text text-transparent bg-gradient-to-tr from-violet-500 to-fuchsia-500 font-semibold text-3xl h-10'>Hawkar Phone</h1>
        </header>
    )
}

export default Header