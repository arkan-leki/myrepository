import { MenuIcon } from '@heroicons/react/solid'

const Header = ({ sate, handleState }) => {
    return (
        <>
            <header className={`z-10 fixed top-0 h-12 backdrop-blur-xl flex-nowrap flex flex-row w-full ${sate ? 'right-0' : 'md:right-48 right-44'} bg-neutral-800 bg-opacity-50 shadow-sm items-center justify-start `}>
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