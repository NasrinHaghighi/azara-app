'use client'
import React,{useState} from 'react'
import { RiMenu5Line } from "react-icons/ri";

import Link from 'next/link';
import AuthLinks from './AuthLinks';



function NavbarRes() {
    
    const [open,setOpen]=useState(false)
    const handleLinkClick = () => {
      setOpen(false); // Close the menu when a link is clicked
    };
  return (
    <>
    <div className='flex relative'>

<div onClick={()=>setOpen(!open)} className='text-2xl bg-orangecolor p-2 rounded-full '><RiMenu5Line /></div>

{open && <div className={`mt-14 z-10 mb-20 absolute w-full h-[500px] text-center pt-8 pb-8 flex flex-col gap-5 text-xl rounded-md bg-bgGolden min-w-[300px]`}>
<div onClick={handleLinkClick}><Link href='/' > خانه</Link></div>
<div onClick={handleLinkClick}><Link href='/about' > درباره ما</Link></div>
<div onClick={handleLinkClick}><Link href='/poems' > اشعار</Link></div>
<div onClick={handleLinkClick}><Link href='/friends' > دوستان</Link></div>
<AuthLinks />
    </div>}
    </div>
  
    </>
  )
}

export default NavbarRes