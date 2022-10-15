import { FaSearch, FaShoppingBasket } from 'react-icons/fa';
import TileView from './TileView';

const Cashair = () => {
    return (
        <>
            <div className='flex flex-wrap bg-gray-300 bg-opacity-50 m-2 p-2 md:text-base text-xs'>
                <div className='flex-1 flex flex-col m-2 p-2'>
                    <div className='flex flex-row gap-2 justify-between'>
                        <h3 className='flex-grow  text-xl font-bold'>کاڵاکان</h3>
                        <div className='flex items-center'>
                            <input className='px-2 py-1 hover:text-gray-900 rounded-r' type="text" name="code" id="code" />
                            <button className='p-2 bg-gray-700 hover:bg-black rounded-l'><FaSearch /></button>
                        </div>
                        <button className='btn shadow-sm'><FaShoppingBasket /></button>
                    </div>
                    <TileView />
                    <TileView />
                    <hr className='my-2' />
                </div>
                <div className=' md:w-1/4 text-base w-full bg-gray-800 opacity-80 m-2 p-2 rounded-md'>
                    <h3 className='px-4 text-lg'>زانیاری کڕیار</h3>
                    <hr className='my-2' />
                    <div className='flex-1 w-full flex flex-col p-2'>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div className="flex-1">
                                دانە
                            </div>
                            <div className="flex-1">
                                22
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div className="flex-1">
                                کۆی وەسڵ
                            </div>
                            <div className="flex-1">
                                $484
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col m-2 items-baseline'>
                            <label htmlFor="customer">بنکە</label>
                            <select id="customer" name="customer" className='w-3/4 m-1 p-1 rounded bg-gray-300 text-black'>
                                <option defaultValue={1}>{'موبایل ئایفۆن'}</option>
                            </select>
                        </div>
                        <div className='flex-1 flex flex-col m-2 items-baseline'>
                            <label htmlFor="customer">کۆد</label>
                            <select id="customer" name="customer" className='w-3/4 m-1 p-1 rounded bg-gray-300 text-black'>
                                <option defaultValue={1}>{'هاوکار شۆ'}</option>
                            </select>
                        </div>
                        <div>
                            <input type="button" className='btn bg-red-700' defaultValue="پەسەند" />
                        </div>
                        <hr className='my-2' />
                        <div className='m-4 flex flex-col gap-1 '>
                            <div className='flex flex-row justify-between m-2 items-center'>
                                <p>کۆی وەسڵ</p>
                                <p>484</p>
                            </div>
                            <input type="button" className='btn w-full' defaultValue="نەقد" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Cashair