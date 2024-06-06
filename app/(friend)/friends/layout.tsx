import React from 'react'
import Header from '../../components/PoemsAbout/Header'
import SidebarPoems from '../../components/PoemsAbout/Sidebar'




interface MainLayoutProps {
    children: React.ReactNode
}
function FriendsLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className=" h-screen overflow-x-hidden ">
 <Header />
<div className="grid grid-cols-12 lg:gap-3 gap-0 mt-8 mx-8 ">
   
                 
   <div className='lg:col-span-3 col-span-12 lg:order-1 order-1 '>
  <SidebarPoems />
    
   </div>
   <div className='lg:col-span-9 col-span-12 lg:order-2 order-2 mx-3'>{children}</div>
</div>
    
    </div>
    {/* <div     className="h-96 bg-yellow-400 flex justify-center items-center ">footer</div> */}
    </>
  )
}

export default FriendsLayout