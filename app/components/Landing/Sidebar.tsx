import React from 'react'
import Link from 'next/link'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


function Sidebar({isOpen, toggleSidebar}: {isOpen: boolean, toggleSidebar: () => void}) {
    
  return (
    <div 
    className={`${isOpen ? 'right-0' : '-right-96'} bg-gray-200 h-lvh z-5 absolute flex flex-col  py-48  transition-all duration-500 ease-in-out px-16 `}>
{sidebarItems.map((item)=>{
  return(
    <div className='my-4 text-2xl font-medium text-gray-900' key={item.name} onClick={toggleSidebar}>
       <Link href={item.href}>   {item.name} </Link>
    </div>
  )
})}
    </div>
  )
}

export default Sidebar

const sidebarItems= [
  {
    name: 'خانه',
    href: '/'
  },
  {
    name: 'درباره من',
    href: '/about'
  },
  {
    name: 'اشعار',
    href: '/poetry'
  },
  {
    name: ' اشعار دوستان',
    href: '/frindes'
  },
  {
    name: 'گالری تصاویر',
    href: '/gallery'
  }
]

// ${isOpen ? 'opacity-100' : 'opacity-100'}${isOpen ? 'right-0' : '-right-300'}