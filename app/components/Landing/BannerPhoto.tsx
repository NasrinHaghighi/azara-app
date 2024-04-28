'use client'
import React ,{useState, useEffect}from 'react'
import Image from 'next/image'
import Photo from '../../../public/img/face2.png'

function BannerPhoto() {
const [timer, setTimers] = useState(false);

useEffect(() => {
setTimeout(() => {
setTimers(true);
}, 1000);
}, [])

return (
<div className={`absolute w-full h-full animate-faderigth z-0 transition-opacity duration-2000 ${timer ? 'opacity-100' : 'opacity-0'}  `}>
<Image src={Photo.src} layout="fill" objectFit="cover" alt='img' />
</div>
)
}

export default BannerPhoto