'use client'
import Link from 'next/link';
import React,{useState}from 'react'



function Dropdown() {
    const [open, setOpen] = useState(false);
    return (
        <div>
             <div className="dropdown inline-block relative ">
    <button onClick={()=>setOpen(!open)} className="bg-white text-text-color font-semibold py-2 px-4 rounded inline-flex items-center">
      <span className="mr-1">مرتب کردن</span>
      <span></span>
    </button>
    <ul className={`dropdown-menu absolute ${!open && 'hidden'} bg-white text-text-color  w-52 p-2 rounded-md  shadow mt-2`}>
      <li className=""><Link className="rounded-md   hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" 
      href={`/dashboard/poems?sort=newest`} onClick={()=>setOpen(false)}>جدیدترین</Link></li>
      <li className="">
        <Link className=" rounded-md  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" 
      href={`/dashboard/poems?sort=oldest`} onClick={()=>setOpen(false)}>قدیمی ترین</Link></li>
     
    </ul>
  </div>
        </div>
    )
}


export default Dropdown