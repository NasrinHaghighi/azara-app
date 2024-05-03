'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { togglerAction } from '../../redux/toggleSlice'
import { RootState } from '../../redux/store'
function ChildrenWrapper({children}: {children: React.ReactNode}) {


const toggler = useSelector((state: RootState) => state.toggler.value)
return (
<div className={`${toggler ? 'mr-64' : 'mr-0' } transition-all duration-500 ease-in-out h-full`}>
{children}
    </div>
  )
}

export default ChildrenWrapper