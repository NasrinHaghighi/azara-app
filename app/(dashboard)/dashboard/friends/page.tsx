import DashboardFrienditem from '@/app/components/Dashboard/DashboardFrienditem';
import React from 'react'



const getData = async () => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/friends`, { cache: 'no-store' }, );
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
  
    return res.json();
  }
async function FriendsPagedashboard() {
    const data = await getData();
 
  return (
    <div>

{data.map((item:any,index:number)=>{
    return(
       <DashboardFrienditem key={index} friend={item} />
    )
})}
    </div>
  )
}

export default FriendsPagedashboard