import React from 'react'
import { convertSabkToTitle } from '../../../../utils/func';

import Image from 'next/image'
import Link from 'next/link';


function FriendItem({ item, index , backgroundImage}: any) {
    //  console.log(item)
    const titles = convertSabkToTitle(item?.sabk);
    const isOdd = index % 2 !== 0;
    return (
        <div className="grid grid-cols-12 px-12 py-8 bg-slate-300 rounded-md mb-5 gap-8 " 
        style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
           
            <div className={`col-span-4 flex flex-col justify-center items-center text-center  ${isOdd ? 'order-1' : 'order-2'} `} >
                <Image src={item.img} alt="face" width={250} height={250} className="rounded-full mb-5 shadow-lg" />
                <div>
                    <div className="text- mb-3 flex flex-col items-center">

                        <span className="text-green-700 font-semibold">{item.name} </span>
                      
                        <div className="text-md mb-5">
                            <span>سبک شعر : </span>
                            <span className="text-orange-400">
                                {titles.map((item, index) => {
                                    return <span className='text-red-500'> {item}{index < titles.length - 1 ? ' - ' : ''}</span>
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`col-span-8    ${isOdd ? 'order-2' : 'order-1'} py-5 text-center`}>
                <div className='text-2xl mb-3'>عنوان : <span className='text-ligthText'>{item.title}</span></div>
                {/* poem */}
                <div
                    className="leading-relaxed  text-lg"
                    dangerouslySetInnerHTML={{ __html: item?.des.substring(0, 300) || '' }}
                />
                {/* <Link href={`/friends/${item.slug} `}>ادامه مطلب...</Link> */}
          {/* <div className='text-center text-red-700 my-5'><Link href={`/friends/${item.slug} `}>ادامه مطلب...</Link></div>  */}
          <Link className='text-center text-red-700  font-semibold my-24' href={item.slug}>ادامه مطلب...</Link></div>
           
            
        </div>
    )
}


export default FriendItem



