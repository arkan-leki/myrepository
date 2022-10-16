import { FaFilter, FaSearch } from 'react-icons/fa'
import Layout from '../../components/Layout'
import PaymentsTable from '../../components/payments/PaymentsTable'

const Home = (props) => {
    return (
        <Layout>
            <div className="flex flex-col mx-4 ">
                <div className=" overflow-x-auto ">
                    <div className="flex justify-between gap-1 items-center py-3 pl-2">
                        <h3 className='text-lg font-bold'>پارەدانەکان</h3>
                        <div className="flex-1 relative max-w-xs">
                            <label htmlFor="hs-table-search" className="sr-only">
                                گەڕان
                            </label>
                            <input
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block  w-full p-3 pl-10 text-xs border-gray-100 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-900 bg-opacity-60 hover:bg-opacity-100 dark:border-gray-700 dark:text-gray-400"
                                placeholder="گەران..."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <FaSearch />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                {/* <AddSaleModal saveOrder={handeSave} /> */}
                                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 m-1">
                                    <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                                        <div>
                                            <FaFilter />
                                        </div>
                                        <div className="hidden sm:block">
                                            فلتەر
                                        </div>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <PaymentsTable />
                </div>
            </div>
        </Layout>
    )
}

export default Home