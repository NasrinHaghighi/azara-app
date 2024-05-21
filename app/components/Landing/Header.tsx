
'use client'
import React from 'react'
import { RiMenu5Fill } from "react-icons/ri";
import Image from 'next/image';
import Logo from '../../../public/img/azara-2.jpg'
import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import NavbarRes from './NavbarRes';
import Welcome from './Welcome';

function Header() {
  return (
    <div className='lg:px-40 px-16  py-12  flex justify-between items-center z-20
     fixed w-full top-0 right-0 bg-transparent'>
   
      <div className='flex-1 hidden md:flex'>
            <NavbarLinks />
        </div>
        <div className='flex-1 md:hidden '>
     <NavbarRes />
        </div>
         <div className=' text-left '>
          <Link href='/'>
          logo
        
          </Link></div>
      
          <div className='hidden lg:flex flex-1 justify-end  gap-5 '>
       
           
          
           
       <Welcome />
        
    </div>
    
    </div>
  )
}

export default Header