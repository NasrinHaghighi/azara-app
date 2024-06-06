'use client'

import React from 'react'
import Link from 'next/link'

import Welcome from '../Landing/Welcome'
import AuthLinksPoemsAbout from './AuthLinksPoemsAbout'

function Header() {
  return (
    <div className={`lg:px-40 px-12  py-12  flex justify-between items-center z-20
     w-full top-0 right-0  `}>
   <AuthLinksPoemsAbout /> 
        <div className='hidden md:flex flex-1 justify-center  gap-5 '>
       
           
          
           
       <Welcome />
        
    </div>
        <div className=' text-left '>
          <Link href='/'>
          logo
        
          </Link></div>
        </div>
  )
}

export default Header