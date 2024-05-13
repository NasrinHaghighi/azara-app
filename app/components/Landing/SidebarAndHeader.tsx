'use client'
import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { togglerAction } from '../../redux/toggleSlice'

function SidebarAndHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        dispatch(togglerAction(!isSidebarOpen))
      };    
     // console.log(isSidebarOpen)
  return (
    <>
    <div className='relative'>
    
    <Header toggleSidebar={toggleSidebar}/>
   <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
  
   </div>
  
   </>

  )
}

export default SidebarAndHeader