'use client'
import React,{useEffect, useRef} from 'react'
import Link from 'next/link'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';


function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
const container = useRef(null)
const tl = useRef<gsap.core.Timeline>(gsap.timeline({ paused: true }));

useGSAP(() => {
gsap.set('.menuLink', { y: -150, opacity: 0,duration:2 })
gsap.to('.menuLink', { y: 0, opacity:1, duration: 2 , stagger: 0.1, delay:-0.75})

}, { dependencies: [isOpen], revertOnUpdate: true })

useEffect(() => {
  if (isOpen) {
    tl.current.play();
  }
}, [isOpen, ]);

// else{
//   tl.current.reverse();
// }

return (
<div
ref={container}
className={`${isOpen ? 'right-0' : '-right-96'} bg-gray-200 h-lvh z-5 absolute flex flex-col  py-48 text-center transition-all duration-500 ease-in-out px-16 z-10`}>
{sidebarItems.map((item) => {
return (
<div className='menuLink my-4 text-3xl font-medium text-gray-900 text-orangecolor' key={item.name} onClick={toggleSidebar}>
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