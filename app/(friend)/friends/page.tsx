import FriendItem from '@/app/components/Landing/Firends/Friendspage/FriendItem'
import React from 'react'
import F1 from '../../../public/img/f1.png'
import F2 from '../../../public/img/f2.png'
import F3 from '../../../public/img/f3.png'
import F4 from '../../../public/img/f4.png'


const arr = [F1, F2, F3, F4, ]
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
     <h1 className='text-center text-3xl font-semibold mb-5'> دوستان شاعر</h1>
   {data.map((item:any, index:number)=>{
   const backgroundImage = arr[index % arr.length];
   const isOdd = index % 2 !== 0;
        return <FriendItem index={index} key={index} item={item} isOdd={isOdd} backgroundImage={backgroundImage} />
    })} 
    </>
  )
}

export default FriendsPage