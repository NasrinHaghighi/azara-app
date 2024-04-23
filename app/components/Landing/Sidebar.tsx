import React from 'react'

function Sidebar({isOpen}: {isOpen: boolean}) {
    console.log(isOpen)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-96'} bg-gray-400 h-lvh z-5 absolute   py-48  transition-all duration-500 ease-in-out px-36 `}>Sidebar</div>
  )
}

export default Sidebar

// ${isOpen ? 'opacity-100' : 'opacity-100'}${isOpen ? 'right-0' : '-right-300'}