import React from 'react'
import Header from '../components/PoemsAbout/Header'
import SidebarPoems from '../components/PoemsAbout/Sidebar'
import Footer from '../components/Landing/Footer'




interface MainLayoutProps {
    children: React.ReactNode
}
function PoemAboutLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className=" h-screen relative bg-bg m-auto w-full md:w-4/5 lg:px-28 px-5">
 <Header />
<div className="grid grid-cols-12 lg:gap-8 gap-0 mt-8  sm:mx-0   ">
   
                 
   <div className='xl:col-span-3 col-span-12 lg:order-1 order-1 '>
  <SidebarPoems />
    
   </div>
   <div className='xl:col-span-9 col-span-12 lg:order-2 order-2  '>{children}</div>
</div>
<Footer />
    </div>
   
    </>
  )
}

export default PoemAboutLayout