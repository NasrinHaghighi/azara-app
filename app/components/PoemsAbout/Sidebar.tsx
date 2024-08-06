'use client';
import React from 'react'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { usePathname } from 'next/navigation'


function SidebarPoems() {
     const pathname  = usePathname();
   //  console.log(pathname)
  return (
    <div className='md:min-w-[200px] min-w-[200px] md:p-4 p-2 rounded-md shadow-2xl xl:mt-24 mt-5   bg-bgGolden shadow-yellow-500/40   text-black xl:fixed xl:mb-96 mb-10' 
     >
  <ul className='flex xl:flex-col flex-wrap place-items-center py-5 gap-10 mt-5 font-semibold xl:text-lg text-base '>


     {Links.map(link=>(
          <li 
          className={`flex gap-x-2 items-baseline xl:text-right text-center min-w-[200px] hover:border-b-4 border-yellow-600 transition-all hover:-translate-x-3 ${
               pathname === link.link ? 'border-b-4 border-yellow-600' : ''
             }`}
          key={link.id}>
            <span className='text-yellow-600'>{link.icon}</span>  
            <Link href={link.link}>{link.title}</Link>
            </li>
        ))}
    
</ul>
          </div> 


  )
}

export default SidebarPoems


const Links=[
     {id:1, title:'خانه', link:'/', icon:<FaHome />},
     {id:2, title:'اشعار', link:'/poems', icon:<FaSwatchbook />},
     {id:3, title:'  دوستان شاعر' , link:'/friends', icon:<MdPeopleAlt />},
     {id:4, title:'درباره من', link:'/about', icon:<FaCircleInfo />},

]
 
