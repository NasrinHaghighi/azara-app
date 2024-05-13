import React from 'react'
import Image from 'next/image'
import Photo from '../../../public/img/face3.png'

function AboutCo() {
return (
<div className='relative bg-bg mb-24'>
<div className="grid grid-cols-2 grid-rows-1 gap-4 my-8 bg-input-bg rounded-lg shadow-lg mx-auto relative overflow-hidden ">
<div className='bg-gray-200 '>
<Image src={Photo} alt="Description" className='w-full h-full ' objectFit='cover' width={200} height={200} />
</div>
<div>
{/* Other content */}
</div>
<div className='absolute top-1/3 right-2/4 md:text-5xl text-l md:pt-12 '>
<h1 className='mb-5'>استاد حاج حسن آذریان</h1>
<h5 className='text-orangecolor'>شاعر و ترانه سرا</h5>
</div>
</div>
<div className='w-full md:px-24 sm:px-12 px-6 bg-bg rounded-md aboslute z-0 -top-5'>
<div className='bg-input-bg p-5 rounded-lg shadow-md '>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia exercitationem non eius, voluptate atque nam, illum corrupti facilis repellat numquam quos magnam architecto repellendus amet quam voluptas asperiores, dicta sit eveniet! Dolore blanditiis quaerat quidem adipisci velit provident optio, exercitationem, in earum autem atque explicabo recusandae, voluptas nobis doloribus accusantium veritatis vero maxime illum iusto culpa amet suscipit id cumque? Laboriosam consectetur ab rem iusto. Necessitatibus odio odit nam deserunt quaerat sed molestias minus est quisquam labore non quo magnam hic debitis, consequatur totam error voluptate eligendi fugit quam! Maxime ducimus saepe, aliquid quam accusantium tempore quasi nisi, laudantium, nobis est sed repellat excepturi ullam. Architecto sequi libero ratione error a qui assumenda neque dolorem incidunt nostrum, quos veritatis non quo quod tempore! Accusamus, quam. Inventore incidunt reiciendis minus? Officiis alias laboriosam, fugit error accusamus aliquid nemo facilis eum tempore mollitia, nam, voluptas libero aperiam? Nam alias deserunt tempora, vel sit in nesciunt id, velit eaque rerum laborum deleniti! Pariatur quaerat nostrum repellat modi quasi porro unde. Perferendis quidem provident error modi laboriosam omnis, reprehenderit cumque aliquid, in deleniti, corrupti a consectetur officia commodi architecto fugit rerum nam? Omnis labore magnam numquam velit, rerum veniam magni quaerat fugit quibusdam.
</div>
</div>
</div>
)
}

export default AboutCo