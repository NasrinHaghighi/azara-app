import React from 'react'
import Link from 'next/link'
import SidebarIamge from '../../../public/img/sidebar.png'

function SidebarPoems() {
  return (
    <div className='min-w-[300px] md:p-5 p-2 rounded-md shadow-sm md:my-2 mt-0  mb-8 fixed ' style={{
     backgroundImage: `url(${SidebarIamge.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
     }}>
  <ul className='grid place-items-center py-5 gap-10 mt-5 font-semibold lg:text-lg text-base '>
    <li 
   >
        <Link href='/'>خانه</Link></li>
    <li 
    >
        <Link href='/poems'>اشعار</Link></li>
    <li 
   >
        <Link href='/friends'> اشعار دوستان</Link></li>
    
        <li 
   >
        <Link href='/about'>  درباره من</Link></li>
        <li 
   >
        <Link href='/friends'> گالری</Link></li>
    
</ul>
          </div> 


  )
}

export default SidebarPoems
 
