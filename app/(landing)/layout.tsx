import React from 'react'

import SidebarAndHeader from '../components/Landing/SidebarAndHeader'
import ChildrenWrapper from '../components/Landing/ChildrenWrapper'


interface MainLayoutProps {
    children: React.ReactNode
}
function MainLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className="overflow-y-scroll overflow-x-hidden h-screen ">
     <SidebarAndHeader />
    
    <ChildrenWrapper >
  {children}
  
    </ChildrenWrapper>
   
   
    </div>
 
    </>
  )
}

export default MainLayout