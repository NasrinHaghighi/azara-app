import FriendItem from '@/app/components/Landing/Firends/Friendspage/FriendItem'
import React from 'react'




//const arr = [F1, F2, F3, F4, ]
const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/friends`
    , { cache: 'no-store' })

  if (!res.ok) throw new Error('fffffffffailed')

  return res.json()
}
async function FriendsPage() {

  const data =await getData()
  

  return (
    <>
    <div>
     <h1 className='text-center text-3xl font-semibold mb-5 text-bgGolden'> دوستان شاعر</h1>
   {data.map((item:any, index:number)=>{
   //const backgroundImage = arr[index % arr.length];
   const isOdd = index % 2 !== 0;
        return <FriendItem index={index} key={index} item={item} isOdd={isOdd} />
    })} 

    </div>
    </>
  )
}

export default FriendsPage