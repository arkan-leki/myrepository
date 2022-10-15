import Link from 'next/link'

const AsideItem = ({ icon, text = 'Tooltip 💡', goto = '' }) => {
    return (
        <>
            <Link href={`${goto}`} >
                <li className="flex flex-row bg-neutral-800 bg-opacity-0 px-4 hover:bg-opacity-20 hover:cursor-pointer">
                    < div className="p-2 flex flex-row items-center">
                        {icon}
                        <p className="m-2 inline-block font-medium text-base">{text}</p>
                    </div>
                </li>
            </Link>
        </>
    )
}

export default AsideItem