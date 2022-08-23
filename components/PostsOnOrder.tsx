import { Product, ProductOnPosts } from '@prisma/client'
import React from 'react'
import { HiOutlineXCircle } from 'react-icons/hi'



const PostsOnOrder = ({post}) => {
    return (
        <div className='flex flex-row justify-between items-center p-2 w-full text-start '>
            <img className='w-10 rounded mr-2' src="/Apple-IPhone-8-Plus-on-transparent-background-PNG.png" alt="" />
            <p className='whitespace-nowrap'>Product: {post.product}</p>
            <div className='m-2 px-1 bg-gray-600'>
                <p>{post.quantity}</p>
            </div>
            <div className='ml-2p-3'>
                <p>${post.price}</p>
            </div>
            <div><button className="btn hover:bg-gray-600 mx-2 bg-transparent text-red-700  rounded-3xl"><HiOutlineXCircle size={20} /></button></div>
        </div>
    )
}

export default PostsOnOrder