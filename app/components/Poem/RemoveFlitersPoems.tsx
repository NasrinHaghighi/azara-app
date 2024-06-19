'use client'
import React from 'react'

function RemoveFlitersPoems() {
    const handelRemove=()=>{
        window.history.replaceState(null, '', '/poems')
        window.location.reload();
    }
  return (
    <button onClick={handelRemove} className='py-3 px-2 bg-red-400 rounded-md'>حذف فیلتر ها</button>
  )
}

export default RemoveFlitersPoems