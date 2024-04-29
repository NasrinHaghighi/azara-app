
'use client'
import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";

function Header({toggleSidebar}: {toggleSidebar: () => void}) {
  return (
    <div className='px-40 py-12 bg-transparent flex justify-between items-center z-20
     absolute w-full top-0 right-0'>
      
        <div onClick={toggleSidebar} className='cursor-pointer bg-orangecolor text-white p-4 rounded-full text-2xl hover:shadow-5xl hover:scale-105 transition-all duration-200'>
        <RiMenu5Fill />
        </div>
        <div>logo</div>
    </div>
  )
}

export default Header