'use client'

import { AiOutlineToTop } from "react-icons/ai";

function BackTopTop() {
  
const scrollUp=()=>{
    window.scrollTo({
    top:0,
    behavior:"smooth"
  })
}
  return (
    <div className='mb-5 text-rose-400 hover:text-green-400 font-semibold text-5xl w-24 h-24 flex justify-center items-center mx-auto hover:border-2 border-green-400 rounded-full p-2 cursor-pointer transition ease-in-out delay-150' onClick={scrollUp}>
        <button onClick={scrollUp}><AiOutlineToTop /></button>
    </div>
  )
}

export default BackTopTop