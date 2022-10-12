import { CurrencyDollarIcon, ReceiptRefundIcon, ShoppingCartIcon, InboxInIcon } from '@heroicons/react/solid'
import Cashair from './Cashair'
import WidgetCart from './WidgetCart'
const Dashpool = () => {
    return (
        <div className=''>
            <div >
                <div className='flex flex-wrap whitespace-nowrap justify-evenly items-center '>
                    <WidgetCart title='داواکاری نوێ' icon={
                        <ShoppingCartIcon className='md:w-20 w-10 opacity-80 text-cyan-900 group-hover:animate-pulse' />
                    }
                        color='bg-cyan-600' />

                    <WidgetCart title='قاسە' icon={
                        <InboxInIcon className='md:w-20 w-10 opacity-80 text-green-900 group-hover:animate-pulse' />
                    }
                        color='bg-green-600' />

                    <WidgetCart title='گەڕانەوە' icon={
                        <CurrencyDollarIcon className='md:w-20 w-10 opacity-80 text-yellow-900 group-hover:animate-pulse' />
                    }
                        color='bg-yellow-600' />

                    <WidgetCart title='گەڕانەوە' icon={
                        <ReceiptRefundIcon className='md:w-20 w-10 opacity-80 text-red-900 group-hover:animate-pulse' />
                    }
                        color='bg-red-600' />
                </div>
            </div>

            <div>
                <Cashair />
            </div>
        </div>
    )
}

export default Dashpool