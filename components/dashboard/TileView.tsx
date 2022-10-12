import { FaBoxOpen, FaDollarSign, FaTrashAlt } from 'react-icons/fa';

const TileView = () => {
    return (
        <>
            <div className='flex flex-row justify-around gap-2 bg-white bg-opacity-75 shadow-md md:p-4 p-2 my-2 text-black rounded items-center'>
                <div>
                    <button className="btn bg-red-700"><FaTrashAlt className='md:w-5 w-2' /></button>
                </div>
                <div>
                    <img
                        src='https://banner2.cleanpng.com/20180325/sxq/kisspng-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-5ab72c72740db3.4853433615219539064754.jpg'
                        alt="Picture of the author"
                        className='md:w-10 w-6'
                    />
                </div>
                <div className='flex flex-col justify-evenlytext-lg font-bold'>
                    <h2>iPhone 8</h2>
                    <p>موبایل</p>
                    <p>$30</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row '>
                        <span className='flex items-center p-2 bg-green-600 text-center'><FaBoxOpen color='white' /></span>
                        <input className='border p-2 px-4 md:w-32 w-10 shadow-inner shadow-gray-300 border-gray-300' defaultValue={22} type="number" />
                    </div>
                    <div className='flex flex-row'>
                        <span className='flex items-center  p-2 bg-green-600'><FaDollarSign color='white' /></span>
                        <input className='border p-2 px-4 md:w-32 w-10 shadow-inner shadow-gray-300 border-gray-300' defaultValue={22} type="number" />
                    </div>
                </div>
                <div className='items-end'>
                    <h3 className='md:text-xl text-base font-extrabold'>$484</h3>
                </div>
            </div>
        </>
    )
}

export default TileView