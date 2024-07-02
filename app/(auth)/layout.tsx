import React, { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className='bg-bg h-screen'>{children}</div>
  )
}

export default AuthLayout