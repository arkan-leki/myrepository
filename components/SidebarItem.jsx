import Link from 'next/link'

const SidebarItem = ({ icon, text = 'Tooltip 💡',  goto = '' }) => {
    return (
        <Link href={`${goto}`}>
            <div className='sidebar-icon group'>{icon}
                <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
            </div>
        </Link>
    )
}

export default SidebarItem