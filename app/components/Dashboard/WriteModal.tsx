'use client'

import React from 'react'

import Image from 'next/image'

interface ModalProps{
    openModal:boolean,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    values: any
    
}

const WriteModal:React.FC<ModalProps> =({openModal, setOpenModal, values}) =>{




  return (
    <>
   
   {
    openModal && (
        <div id="modelConfirm" className="fixed z-50 inset-0 bg-gray-900 bg-opacity-95 overflow-y-auto h-full w-full flex justify-center pt-36 overflow-x-hidden">
           <div className=''>
      <div className="flex justify-center">
      <button className='bg-red-500 font-semibold p-5 rounded-md' onClick={()=>setOpenModal(false)}>بازگشت به نوشتن پست</button>
      </div>

            <br/>            
          {!values?.title || !values?.file || !values?.value &&(
               <div className="text-white text-center mt-12 text-lg font-semibold">پر کردن حداقل یکی از موارد الزامی است.</div>)} 
            
         
    
                  
              <div className=' bg-bg text-white rounded-md  max-h-[80vh] overflow-y-auto px-5 py-5 mx-5 w-full   text-center'>
                    <div className="grid md:grid-flow-col grid-flow-row md:justify-around justify-center items-center w-l ">
                       
                        <div className="col-span-4 mb-10 ">
                             <Image src={values?.img ? values.img :''} alt='postimage' width={200} height={200} className='object-cover rounded-md h-[300px] w-[300px]' /> 
                        </div>
                        {/* <div className="col-span-8 ">  
                             <h2 className='md:text-2xl text-l font-bold py-8 text-rigth leading-relaxed'>{values?.title ? values?.title :''}</h2>
                       </div> */}
                        
                    </div>
                     <div className=" p-0  grid grid-cols-1 oveflow-auto">
        <div className=' p-2 text-balance' dangerouslySetInnerHTML={{ __html: values?.des || '' }} />
   </div> 
                    
                </div> 
          
            </div> 
        </div>
    )
} 
        
</>
  )
}

export default WriteModal
