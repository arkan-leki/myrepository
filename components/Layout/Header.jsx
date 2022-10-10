import { MenuIcon } from '@heroicons/react/solid'

const Header = ({ sate, handleState }) => {
    return (
        <>
            <header className={` flex-nowrap flex flex-row w-full ${sate ? 'right-0' : 'md:right-46 right-40'} bg-neutral-800 bg-opacity-50 shadow-sm  relative top-0 items-center justify-start `}>
                <ul className="flex flex-row items-center p-2">
                    <button className="space-y-2" onClick={handleState}>
                        <MenuIcon className='h-5 m-1 group-hover:animate-bounce' />
                    </button>
                    <li className="m-2 inline-block">
                        <a href="/api/" className="text-xl">API</a>
                    </li>
                    <li className="m-2 inline-block">
                        <a href="/admin/" className="text-xl">Admin</a>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default Header