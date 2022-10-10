import Link from 'next/link'

const AsideItem = ({ icon, text = 'Tooltip 💡',  goto = '' }) => {
    return (
        <>
            <li className=" px-4 flex flex-row bg-neutral-800 bg-opacity-0 hover:bg-opacity-20">
                <Link href={`${goto}`} >
                    < div className="p-2 flex flex-row items-center hover:cursor-pointer">
                        {icon}
                        <p className="m-2 inline-block font-medium text-base">{text}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default AsideItem