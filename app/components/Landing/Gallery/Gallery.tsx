import React from 'react'
import Gall from '../../../../public/img/gall1.png'

import Image from 'next/image'
function Gallery() {
  return (
    <div className='  my-8 '>
    <div className=" md:h-[500px] sm:h-[300px] xs:h-[200px] relative m-auto flex justify-center items-center "  >
<Image src={Gall} alt="gall"  objectFit='cover' width={700} height={400} />
    </div>

  </div>
  )
}

export default Gallery