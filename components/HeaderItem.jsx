import Link from 'next/link'
import React from 'react'

const HeaderItem = ({ title, Icon, goto = '' }) => {
  return (
    <Link href={goto}>
      <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20
    hover:text-white'>
        <Icon className='h-8 m-1 group-hover:animate-bounce' />
        <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
      </div></Link>
  )
}

export default HeaderItem