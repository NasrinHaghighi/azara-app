import FriendItem from '@/app/components/Landing/Firends/Friendspage/FriendItem'
import React from 'react'



const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/friends`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}
async function FriendsPage() {

  const data =await getData()
  

  return (
    <>
   {data.map((item:any, index:number)=>{
        return <FriendItem index={index} key={index} item={item}/>
    })} 
    </>
  )
}

export default FriendsPage