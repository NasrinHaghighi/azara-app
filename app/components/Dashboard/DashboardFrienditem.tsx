

import React from 'react'
import ActionFrienditem from './ActionFrienditem'

function DashboardFrienditem({friend}:any) {
    return (
        <div className='gird grid-cols-1 md:grid-cols-3 gap-5 my-5'>
          <div className='bg-gray-200 p-5 rounded-lg shadow-md '>
            <div className='text-blue-400 hover:underline mb-4'></div>
            <div className='flex flex-col lg:flex-row justify-between text-lg mb-8 gap-y-3 '> 
                <div className='text-gary-500'>ایجاد شده در تاریخ:   <span className='text-green-500 font-semibold'> {friend.createdAt.substring(0,10)}</span>
                 </div> 
                <div >نام:<span className='px-1 text-lime-500 font-semibold text-lg'>{friend.name}</span> </div> 
                
            </div>
            <div>عنوان شعر : <span className='text-green-500 font-semibold'> {friend.title}</span></div>
            
            <div >
                <ActionFrienditem friend={friend} />
                </div>
          </div>
        </div>
      )
}

export default DashboardFrienditem