import { Brand } from '@prisma/client'
import React, { useRef, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import BrandItem from './BrandItem'
import { Modal } from './Util'

interface Props {
    brands: Brand[]
}
const BrandList = ({ brands }: Props) => {
    const [brandz, setBrandz] = useState(brands)
    const [show, setShow] = useState(false)
    const handleClose = () => { setShow(false) }
    const handleOpen = () => { setShow(true) }
    const name = useRef()



    async function saveBrand(data: any) {
        const res = await fetch('/api/brands', {
            method: 'POST',
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return await res.json()
    }

    async function saveHandler() {
        const saveData = await saveBrand({
            name: name.current?.value
        })
        setBrandz([...brandz, saveData.data])
        handleClose()
    }

    return (
        <>
            <div className='p-3 font-bold text-white'><h3>Brands</h3></div>
            <div className='flex flex-row w-full border-2 relative'>
                <div className='flex flex-row  bg-indigo-800 mr-16 bg-opacity-30 w-full h-42 justify-start overflow-scroll scrollbar-thin cursor-grab select-none scroll-smooth  md:scroll-auto'>
                    {brandz?.map((brand: Brand, i) => (
                        <BrandItem key={i} brand={brand} />
                    ))}
                </div>
                <button className='btn absolute right-0 h-full w-fit  bg-opacity-70 flex flex-col items-center justify-center ' onClick={handleOpen}><BsPlusCircle size={24} />Brand</button>
            </div>
            <Modal visible={show} onClose={handleClose} title={'Brand Form'} children={<>
                <div className='flex flex-col w-80 items-center'>
                    <div className='w-3/4'>
                        <input className='w-full input m-1 p-2 rounded bg-gray-600' name='name' type="text" placeholder='brand' ref={name} />
                    </div>
                    <div className='w-3/4'>
                        <input name='file' className='w-full input m-1 p-2 rounded bg-gray-600' type="file" placeholder='storage' />
                    </div>
                    <button className="btn  float-right w-2/4 rounded bg-green-800 hover:bg-green-600" onClick={saveHandler}>save</button>
                </div>
            </>} />
        </>
    )
}

export default BrandList