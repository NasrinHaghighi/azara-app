
'use client'
import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";
import Image from 'next/image';
import Logo from '../../../public/img/azara-2.jpg'

function Header({toggleSidebar}: {toggleSidebar: () => void}) {
  return (
    <div className='lg:px-40 md:px-16 xs:px-5 py-12 bg-transparent flex justify-between items-center z-20
     fixed w-full top-0 right-0'>
      
        <div onClick={toggleSidebar} className='cursor-pointer bg-orangecolor text-white p-4 rounded-full text-2xl hover:shadow-5xl hover:scale-105 transition-all duration-200'>
        <RiMenu5Fill />
        </div>
        <div>
          LOGO
          {/* <Image src={Logo} alt="logo" width={100} height={100} /> */}
        </div>
    </div>
  )
}

export default Header