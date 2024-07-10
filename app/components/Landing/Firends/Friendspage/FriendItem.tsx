import React from 'react'
import { convertSabkToTitle } from '../../../../utils/func';
import Yellow from '../../../../../public/img/yellow.jpg'
import Image from 'next/image'
import Link from 'next/link';



function FriendItem({ item, isOdd, backgroundImage }: any) {
    //  console.log(item)
    const titles = convertSabkToTitle(item?.sabk);
    // const isOdd = index % 2 !== 0;
    return (
        <>
        <div className="grid grid-cols-12 lg:px-12 px-3 py-8 text-text rounded-md mb-5 lg:gap-8 gap:0 border-2 "
            style={{
                backgroundImage: `url(${Yellow.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>

            <div className={`lg:col-span-4 col-span-12 flex flex-col justify-center  lg:text-center border-b-2 border-bg  lg:border-b-0 lg:${isOdd ? 'order-1' : 'order-2'} order-1 w-auto`} >
                <div className='w-full lg:max-w-[250px] max-w-[150px] h-auto m-auto lg:m-1 '>
                    <Image src={item.img} alt="face" width={250} height={250} className="rounded-full mb-5 shadow-lg" />
                </div>
                <div>
                    <div className=" mb-3 flex flex-col items-center ">

                        <span className="text-green-700 font-semibold">{item.name} </span>

                        <div className="text-md mb-5">
                            <span>سبک شعر : </span>
                            <span className="text-orange-400">
                                {titles.map((item, index) => {
                                    return <span key={index} className='text-red-500'> {item}{index < titles.length - 1 ? ' - ' : ''}</span>
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`lg:col-span-8 col-span-12   order-2 lg:${isOdd ? 'order-2' : 'order-1'} py-5 text-center `}>
                <div className='lg:text-3xl text-xl  font-semibold mb-4'>عنوان : <span className='text-bgGolden'>{item.title}</span></div>
                {/* poem */}
                <div
                    className="leading-relaxed  text-xl mb-4"
                    dangerouslySetInnerHTML={{ __html: item?.des.substring(0, 300) || '' }}
                />
            <Link href={`/friends/${item.slug}`} className='text-red-500' >... ادامه مطلب</Link>
            </div>

           
        </div>
        
         </>
    )
}


export default FriendItem



