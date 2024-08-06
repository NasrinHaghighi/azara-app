import React from 'react'
import { convertSabkToTitle } from '../../../../utils/func';
import Yellow from '../../../../../public/img/yellow.jpg'
import Image from 'next/image'
import Link from 'next/link';
import RenderDangerous from '@/app/components/Poem/RenderDangerous';



function FriendItem({ item, isOdd, backgroundImage }: any) {
    //  console.log(item)
    const titles = convertSabkToTitle(item?.sabk);
    // const isOdd = index % 2 !== 0;
    return (
        <>
        <div className="grid grid-cols-12 lg:px-24 px-5 py-8 text-text rounded-md mb-5 lg:gap-8 gap:0 border-2 "
            style={{
                backgroundImage: `url(${Yellow.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className={`lg:col-span-5 col-span-12 flex flex-col justify-center text-center border-b-2 border-bg  lg:border-b-0 lg:${isOdd ? 'order-1' : 'order-2'} order-1 `} >
              
                <div className='lg:order-2'>
                    <div className=" mb-3 flex flex-col items-center ">

                        <span className="text-green-500 font-semibold lg:text-xl text-lg mb-5">{item.name} </span>

                        <div className="text-sm mb-5 text-wrap font-bold">
                            <span>سبک شعر : </span>
                            <span className="text-orange-400">
                                {titles.map((item, index) => {
                                    return <span key={index} className='text-red-500'> {item}{index < titles.length - 1 ? ' - ' : ''}</span>
                                })}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full  max-w-[150px] h-auto m-auto  flex justify-center items-center lg:order-1 '>
                    <Image src={item.img} alt="face" width={250} height={250} className="rounded-full mb-5 shadow-lg" />
                </div>
            </div>
            <div className={`lg:col-span-7 col-span-12   order-2 lg:${isOdd ? 'order-2' : 'order-1'} py-5 text-center `}>
                <div className='lg:text-xl text-xl  font-semibold mb-4'>عنوان : <span className='text-green-500'>{item.title}</span></div>
                {/* poem */}
              
                <RenderDangerous post={item} num={500} />
           <div className='my-5'>
           <Link  href={`/friends/${item.slug}`} className='text-red-500 ' > ادامه مطلب ...</Link>
            </div> 
            </div>

           
        </div>
        
         </>
    )
}


export default FriendItem