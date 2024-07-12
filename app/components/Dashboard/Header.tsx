import React from 'react'

import SignoutBtn from './SignoutBtn';


async function Header() {
  

  return (
    <div className="h-24  rounded-lg grid md:grid-cols-2 justify-center items-center p-8 gap-5 ">
      <div className=" flex order-2 justify-center items-center">
     
        <span className="pl-5"></span>
         <SignoutBtn /> 
      </div>
      <div className='md:font-semibold font-normal md:text-2xl text-l order-1'>Ali Azarian <span className="pl-5"></span><span className='text-green-500'>خوش آمدید</span></div>
     
    </div>
  );
}


export default Header