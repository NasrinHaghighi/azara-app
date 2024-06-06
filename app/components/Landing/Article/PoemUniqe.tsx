'use client'

import Link from 'next/link'
import React,{useRef, useEffect, useState} from 'react'
import { useInView } from 'react-hook-inview'

import ImagePoem from '../../../../public/img/bg1.png'
import ImagePoem2 from '../../../../public/img/bg2.png'
import ImagePoem3 from '../../../../public/img/bg3.png'

const arr=[ImagePoem,ImagePoem2,ImagePoem3]
function PoemUniqe({selectedPosts}:any) {
 // console.log(selectedPosts)

  return (
    <div className="item relative mb-5 w-full h-fit p-2">
      {selectedPosts?.map((item:any, index:number) => (
        <PoemElement item={item} index={index} key={index}/>
      ))}
    </div>
  );
}
function PoemElement({ item,index }: any) {
  //console.log(item)
  const [ref, isVisible] = useInView({
    threshold: 0.3,
    // triggerOnce: true, // Assuming 'triggerOnce' is a valid option for useInView
  });
  const backgroundImage = arr[index % arr.length].src;
  //console.log(backgroundImage) 
  return (
    <>
      <div
        className={`bg-darkPink rounded-lg text-center py-10 z-0 relative mb-12 
    ${isVisible ? 'animate-fadeIn' : 'animate-fadeOut'} ${isVisible ? 'opacity-1' : 'opacity-0'}`}
        ref={ref}
      >
      <div>
        <h1 className="md:text-3xl mb-6  text-lg">{item.title}</h1>

        <div
          className="leading-relaxed text-center text-lg"
          dangerouslySetInnerHTML={{ __html: item?.des.substring(0, 300) || '' }}
        />
        <div className='text-red-500 my-5 font-semibold'><Link href={item.slug}> ادامه مطلب...</Link></div>
      </div>
        <div className=" absolute -z-10 rounded-lg top-2 -left-3 h-full w-full "  style={{
backgroundImage: `url(${backgroundImage} )`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
}}></div>
      </div>
    </>
  ); 
}
export default PoemUniqe


{/* <div className="item relative mb-5 w-full h-fit   p-2" >

{arr.map((item) => {
return (
<div key={item} className='w-full h-96 bg-blue-600 mb-2' ref={ref} >
{isVisible ? 'Hello World!' : ''}
</div>
)
})}


 </div> */}

{/* <div className='bg-gray-200 rounded-lg text-center py-14 z-0 relative'>
<h1 className='md:text-3xl mb-5  text-lg'>طفلان مسلم</h1>
<div>
  <p>تــوای حــارث بـــیـــــا رحــــمــــی بـــــمـــا کــــن</p>
  <p>بـــیــــا آزا د مـــــان بــــهـــــر خـــــــــد ا کـــــــن</p>
  <br/>
  <p>د ر ایــن کــوفــه غــریـب و بـــی پــنـاهـــــیـــــــم</p>
  <p>د وتــا کـود ک قــــریــن اشـــــــک وآهــــــیـــــــم</p>
  <br/>
  <p>بــه د ور از هــر گـنـاه واشــــــــتباهــــیــــــــم</p>
  <p>تــرحــم بــر د و طــفــل بـــــی نــــــوا کـــــــــــــن</p>
  <br/>
  <p> نـمـوده قـلـبـــــمـان شــاد آن نـگــــهـــــــــبـــــان </p>
  <p>کـه کـرده راحــت از زنـجـــیــر و ز نـــــــــــــدا ن</p>
  <br/>
  <p>    بــیــا بـهــرخـــد ا و د یـــــــن و قـــــــــــــــــــرآن
  </p>
  <p>
  تــوهــم رحــمـی بــه جـان مـــا د و تــــــا کـــــــن
  </p>
  <br/>
  <p>
  بــیـــا از مــــا گـــــــذ ر هـــر د و صــغـــیــــریـــم
  </p>
  <p>
  مـــشــــو راضـــی ز تـــیـــــغــــت مــا بــمــیــریـم
  </p>
  <br/>
  <p>
  َنَـــــدانــــــَد مــــاد رم ایـــنــجـــا اســـــیـــریـــــــم
  </p>
  <p>
  بـــیــا از روی پـــیــغــــــمــبـــر حـــیــــا کـــــــــن
  </p>
  </div>

  </div>
  <div className='bg-gray-300 absolute -z-10 rounded-lg top-2 left-3 h-full w-full'></div>  */}

{/* <div>
    <p>تــوای حــارث بـــیـــــا رحــــمــــی بـــــمـــا کــــن</p>
    <p>بـــیــــا آزا د مـــــان بــــهـــــر خـــــــــد ا کـــــــن</p>
    <br/>
    <p>د ر ایــن کــوفــه غــریـب و بـــی پــنـاهـــــیـــــــم</p>
    <p>د وتــا کـود ک قــــریــن اشـــــــک وآهــــــیـــــــم</p>
    <br/>
    <p>بــه د ور از هــر گـنـاه واشــــــــتباهــــیــــــــم</p>
    <p>تــرحــم بــر د و طــفــل بـــــی نــــــوا کـــــــــــــن</p>
    <br/>
    <p> نـمـوده قـلـبـــــمـان شــاد آن نـگــــهـــــــــبـــــان </p>
    <p>کـه کـرده راحــت از زنـجـــیــر و ز نـــــــــــــدا ن</p>
    <br/>
    <p>    بــیــا بـهــرخـــد ا و د یـــــــن و قـــــــــــــــــــرآن
    </p>
    <p>
    تــوهــم رحــمـی بــه جـان مـــا د و تــــــا کـــــــن
    </p>
    <br/>
    <p>
    بــیـــا از مــــا گـــــــذ ر هـــر د و صــغـــیــــریـــم
    </p>
    <p>
    مـــشــــو راضـــی ز تـــیـــــغــــت مــا بــمــیــریـم
    </p>
    <br/>
    <p>
    َنَـــــدانــــــَد مــــاد رم ایـــنــجـــا اســـــیـــریـــــــم
    </p>
    <p>
    بـــیــا از روی پـــیــغــــــمــبـــر حـــیــــا کـــــــــن
    </p>
    </div> */}