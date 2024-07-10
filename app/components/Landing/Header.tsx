
'use client'
import React,{useEffect, useState, useCallback} from 'react'
import { RiMenu5Fill } from "react-icons/ri";
import Image from 'next/image';

import Link from 'next/link';
import NavbarLinks from './NavbarLinks';
import NavbarRes from './NavbarRes';
import Welcome from './Welcome';
import Book from '../../../public/img/books (1).png'

function Header() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

   handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className={`md:px-40 px-5 py-5  flex justify-between items-center 
      w-full top-0 right-0    bg-trnsparent z-20`}>

      <div className='flex-1 hidden md:flex'>
        <NavbarLinks />
      </div>
      <div className='flex-1 md:hidden '>
        <NavbarRes />
      </div>
      <div className='hidden lg:flex flex-1 justify-end  gap-5 '>




<Welcome />

</div>
      <div className=' text-left mx-8'>
        <Link href='/'>
          <Image src={Book} className=' object-contain' width={45} height={45} alt="Book" />

        </Link></div>

    

    </div>
  )
}

export default Header