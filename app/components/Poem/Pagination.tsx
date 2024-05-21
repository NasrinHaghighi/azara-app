import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
function Pagination() {
  return (
    <div className='my-12 flex justify-center items-center gap-12 text-white '>
<button className=' rounded-md   font-medium text-l bg-orangecolor px-3 py-2  flex justify-between items-center shadow-lg hover:scale-105 transition duration-300 ease-out'><span className='mx-2'> <FaArrowRightLong /></span> بعدی   </button>
<button className='rounded-md   font-medium text-l bg-orangecolor px-3 py-2  flex justify-between items-center shadow-lg hover:scale-105 transition duration-300 ease-out'> قبلی <span className='mx-2'> <FaArrowLeftLong /></span></button>
    </div>
  )
}

export default Pagination