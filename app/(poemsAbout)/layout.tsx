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
    <div  className=" h-screen relative ">
 <Header />
<div className="grid grid-cols-12 lg:gap-3 gap-0 mt-8  sm:mx-0 md:mx-36 mx-5 ">
   
                 
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