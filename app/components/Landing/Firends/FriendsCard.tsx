import Image from 'next/image'
import React from 'react'
import Face from '../../../../public/img/face3.png'

function FriendsCard() {
  return (
   <div>
    <div className='flex justify-end pb-3 border-b border-gray-200 items-baseline'>
    <h1>استاد محمد باقرمحب زاده </h1>
   <Image src={Face} alt="face" width={60} height={60} className="rounded-full"/>

    </div>
  
<div className='m-3'>
<h1 className='text-md '>طفلان مسلم</h1>
<div className='text-sm text-righ'>
<p>تــوای حــارث بـــیـــــا رحــــمــــی بـــــمـــا کــــن</p>
<p>بـــیــــا آزا د مـــــان بــــهـــــر خـــــــــد ا کـــــــن</p>

<p>د ر ایــن کــوفــه غــریـب و بـــی پــنـاهـــــیـــــــم</p>
<p>د وتــا کـود ک قــــریــن اشـــــــک وآهــــــیـــــــم</p>

<p>بــه د ور از هــر گـنـاه واشــــــــتباهــــیــــــــم</p>
<p>تــرحــم بــر د و طــفــل بـــــی نــــــوا کـــــــــــــن</p>

<p> نـمـوده قـلـبـــــمـان شــاد آن نـگــــهـــــــــبـــــان </p>
<p>کـه کـرده راحــت از زنـجـــیــر و ز نـــــــــــــدا ن</p>

<p>    بــیــا بـهــرخـــد ا و د یـــــــن و قـــــــــــــــــــرآن
</p>
<p>
تــوهــم رحــمـی بــه جـان مـــا د و تــــــا کـــــــن
</p>

<p>
بــیـــا از مــــا گـــــــذ ر هـــر د و صــغـــیــــریـــم
</p>
</div>
</div>
   </div>
  )
}

export default FriendsCard