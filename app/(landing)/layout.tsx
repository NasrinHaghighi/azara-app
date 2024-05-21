import React from 'react'

import SidebarAndHeader from '../components/Landing/SidebarAndHeader'
import ChildrenWrapper from '../components/Landing/ChildrenWrapper'
import Header from '../components/Landing/Header'


interface MainLayoutProps {
    children: React.ReactNode
}
function MainLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className="overflow-y-scroll overflow-x-hidden h-screen ">
<Header/>
  {children}

    
    </div>
    <div 
    className="h-96 bg-yellow-400 flex justify-center items-center ">footer</div>
    </>
  )
}

export default MainLayout