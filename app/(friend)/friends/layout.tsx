import React from 'react'
import Header from '../../components/PoemsAbout/Header'
import SidebarPoems from '../../components/PoemsAbout/Sidebar'
import Footer from '@/app/components/Landing/Footer'




interface MainLayoutProps {
    children: React.ReactNode
}
function FriendsLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className=" h-screen relative bg-bg md:w-4/5 m-auto w-full lg:px-28 px-5">
 <Header />
<div className="grid grid-cols-12 lg:gap-3 gap-0 mt-8 ">
   
                 
   <div className='lg:col-span-3 col-span-12 lg:order-1 order-1 '>
  <SidebarPoems />
    
   </div>
   <div className='lg:col-span-9 col-span-12 lg:order-2 order-2 py-10'>{children}</div>
</div>
<Footer />
    </div>
    
    </>
  )
}

export default FriendsLayout