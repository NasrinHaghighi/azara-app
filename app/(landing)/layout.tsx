import React from 'react'


import Header from '../components/Landing/Header'


interface MainLayoutProps {
    children: React.ReactNode
}
function MainLayout({children}:MainLayoutProps) {
 
  return (
    <>
    <div  className=" h-screen m-auto bg-bg sm:w-4/5 ">
  <Header/>  
  {children}

    
    </div>
    {/* <div     className="h-96 bg-yellow-400 flex justify-center items-center ">footer</div> */}
    </>
  )
}

export default MainLayout