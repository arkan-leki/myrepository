import { useRouter } from 'next/router'
import React from 'react'
import { FaCalendarTimes, FaMoneyCheck, FaPrint, FaRegEdit, FaShoppingBasket } from 'react-icons/fa'
import CustomerOrderRow from '../../components/customers/CustomerOrderRow'
import TableHeadCustomerOrder from '../../components/customers/TableHeadCustomerOrder'
import Layout from '../../components/Layout'

interface Props {
    name: String;
}

const cutomer = (props) => {
    const router = useRouter()

    return (
        <Layout>
            {/* <div>{router.query.id}</div> */}
            <div className='flex flex-wrap justify-center gap-2 m-2'>
                <div className='flex flex-col rounded-lg bg-white bg-opacity-40 h-full lg:w-3/5 w-full  py-4 px-2'>
                    <div className="p-4 border-b flex flex-row  items-center border-slate-500 justify-between">
                        <div className='flex flex-row items-start gap-1'>
                            <img src='https://xender-app.herokuapp.com/static/media/og.f0eef6be.jpg' className='md:w-16 w-8 border-solid border shadow-2xl  rounded-full' />
                            <div className='flex-1 flex flex-col'>
                                <span className="text-gray-900 font-bold md:text-xl text-base whitespace-pre  hover:underline">کۆمپانیای کۆبانی</span>
                                <span className="text-gray-800 font-normal md:text-lg text-xs  whitespace-pre  hover:underline">بۆ بریکاری گشتی و تایبەت</span>
                            </div>
                        </div>
                        <div className='flex flex-col text-end'>
                            <span className="text-gray-800 font-normal md:text-lg text-xs whitespace-pre  hover:underline">سلێمانی شەقامی قازی</span>
                            <span className="text-gray-800 font-normal md:text-lg text-xs  whitespace-pre  hover:underline">هەولێر راستە شەقامی ئاشتی</span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between bg-gradient-to-tr from-indigo-800 to-purple-800 p-4 rounded-2xl md:text-base text-xs">
                        <div className='text-start'>
                            <p className='font-semibold text-white print:text-black'>ژمارەی پسولە</p>
                            <p>E1220</p>
                            <p>رێکەوت</p>
                            <p>18 Jan 2022</p>
                        </div>
                        <div className='text-end'>
                            <p className='font-semibold text-white print:text-black'> لایەنی پارەدەر</p>
                            <p> کاک محمد</p>
                            <p> پێشانگای راستی </p>
                            <p> هەلەبجەی شەهید </p>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-between '>
                        <h3 className='p-3 font-bold md:text-base text-sm text-white'>کڕیەنەکان</h3>
                        {/* <div className="print:hidden">
                            <AddItemModal saveOrder={undefined} userId={undefined} />
                        </div> */}
                    </div>
                    <hr className='py-1' />
                    <div className="overflow-auto scrollbar-thin border border-gray-500 rounded-lg">
                        <table>
                            <TableHeadCustomerOrder rows={['وەسڵ', ' بنکە', 'بری کڕین', 'پارەی دراو', 'گەرانەوە', 'بەروار', 'قەرز']} />
                            <tbody>
                                <CustomerOrderRow data={1} />
                                <CustomerOrderRow data={1} />
                            </tbody>
                        </table>
                    </div>
                    <hr className='py-2' />
                    <div className='flex flex-row-reverse md:text-base text-xs px-4 py-1'>
                        <div className='flex flex-col w-1/2 md:w-1/3 text-gray-700 font-normal'>
                            <div className='flex  flex-row text-black justify-between font-semibold'>
                                <p >کۆی کڕین</p>
                                <p> $22,000</p>
                            </div>
                            <div className='flex  flex-row  justify-between'>
                                <p >کۆی پارەی دراو </p>
                                <p className='font-semibold text-black'> $200</p>
                            </div>
                            <div className='flex  flex-row  justify-between'>
                                <p >حسابی پێشوو</p>
                                <p className='font-semibold text-black'> $00</p>
                            </div>
                            <hr className='m-2' />
                            <div className='flex flex-row justify-between font-bold'>
                                <p >بڕی داواکراو</p>
                                <p className='text-black'>$24,000 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full lg:w-1/5 flex flex-col print:hidden  gap-2 md:text-base text-xs'>
                    <div className='flex md:flex-col gap-2 h-full'>
                        <div className='flex-1 flex flex-col justify-between rounded-md bg-white bg-opacity-40 p-4 '>
                            <h3 className='font-semibold mb-2'>زانیاری کڕیار</h3>
                            <div className='flex flex-row justify-start gap-2 items-center'>
                                <img src='https://xender-app.herokuapp.com/static/media/og.f0eef6be.jpg' className='w-10 h-10 border-solid border shadow-2xl rounded-full' />
                                <div>
                                    <p className='font-bold'>زەکی احمەد</p>
                                    <p>پێشانگای راستی </p>
                                </div>
                            </div>
                            <hr className='m-2' />
                            <div>
                                <button className="btn text-blue-900 bg-gray-300 bg-opacity-20 hover:bg-white border-gray-50 border rounded-2xl w-full items-center flex flex-row justify-center gap-1">
                                    <FaRegEdit />
                                    کڕیار
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col  rounded-md bg-white bg-opacity-40 p-4 '>
                            <h3 className='font-semibold mb-2'>بەرواری پارەدان </h3>
                            <div className='flex flex-col justify-between m-2 gap-2 items-start'>
                                <p className='font-bold'>$44,000 </p>
                                <p className='bg-pink-600 bg-opacity-30 hover:bg-opacity-90 p-2 rounded-xl text-red-800 hover:text-white'> 24 march 2022 </p>
                            </div>
                            <hr className='m-2' />
                            <div>
                                <button className="btn text-blue-900 bg-gray-300 bg-opacity-20 hover:bg-white border-gray-50 border rounded-2xl w-full items-center flex flex-row justify-center gap-1">
                                    <FaCalendarTimes />
                                    ئاگاداری
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className='btn  p-3 text-red-500 flex items-center justify-center gap-2'> <FaShoppingBasket /> گەرانەوە</button>
                    <button className='btn  p-3 text-green-500 flex items-center justify-center gap-2'> <FaMoneyCheck /> پارەدان</button>
                    <button className='btn  p-3 flex items-center justify-center gap-2'> <FaPrint /> چاپکردن</button>
                </div>

            </div>
        </Layout>
    )
}

export default cutomer