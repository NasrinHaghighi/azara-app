'use client'

import React from 'react'
import Link from 'next/link'
import Book from '../../../public/img/books (1).png'
import Welcome from '../Landing/Welcome'
import AuthLinksPoemsAbout from './AuthLinksPoemsAbout'
import Image from 'next/image'

function Header() {
  return (
    <div className={`lg:px-40 px-12  py-5  flex justify-between items-center z-20
     w-full top-0 right-0  bg-gray-100`}>
   <AuthLinksPoemsAbout /> 
        <div className='hidden md:flex flex-1 justify-center  gap-5 '>
       
           
          
           
       <Welcome />
        
    </div>
        <div className=' text-left '>
        <Link href='/'>
          <Image src={Book} className=' object-contain' width={45} height={45} alt="Book" />

        </Link></div>
        </div>
  )
}

export default Header