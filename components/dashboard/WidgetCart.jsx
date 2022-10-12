import { FaArrowAltCircleLeft } from 'react-icons/fa';

const WidgetCart = ({ icon, color, title }) => {
    return (
        <div className={`md:w-1/5 w-40 ${color} bg-opacity-70 group text-white shadow-sm m-1 rounded-md`}>
            <div className='flex flex-row justify-between p-2'>
                <div className=' text-xl'>
                    <p className='text-3xl font-medium'>{0}</p>
                    <p>{title}</p>
                </div>
                {icon}
            </div>
            <div className={`p-2 hover:bg-opacity-100 ${color} bg-opacity-80 flex flex-row items-center justify-between`}>
                <p>زیاتر</p>
                <FaArrowAltCircleLeft size={20}  />
            </div>
        </div>
    )
}

export default WidgetCart