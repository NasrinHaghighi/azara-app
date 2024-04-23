import React from 'react'

function Header({toggleSidebar}: {toggleSidebar: () => void}) {
  return (
    <div className='px-48 py-12 bg-transparent flex justify-between items-center z-10
     absolute w-full top-0 right-0'>
      
        <div onClick={toggleSidebar} className='cursor-pointer'>icon</div>
        <div>logo</div>
    </div>
  )
}

export default Header