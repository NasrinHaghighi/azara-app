'use client';
import React ,{useState, useEffect}from 'react'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function RemoveCategory({item}:any) {
    //console.log(item)
const [open, setOpen] = useState(false);
const [value, setValue] = useState('');

    const router = useRouter();
    const removeHandle = async (slug:string) => {
   //   console.log(slug)
       
           try {
               // Call API to remove post  
               const res = await fetch(`/api/categories`,
                   {
                       method: 'DELETE',
                       headers: {
                           'Content-Type': 'application/json'
                       },
                       body: JSON.stringify({slug})
   
                   });
   
                   if (res.ok) {
                    toast.success('دسته بندی با موفقیت حذف شد.');
                    setTimeout(() => {
                      router.push('/dashboard/poems');
                      router.refresh();
                    }, 3000);
                  } else {
                    toast.error('خطا در حذف .');
                    throw new Error('Failed to update post');
                  }
              
           } catch (error) {
               // Handle error
               console.error('Error removing post:', error);
           }
       };

       const editCategoryName = async (e:any) => {
        e.preventDefault();
        try {
               // Call API to remove category
               const res = await fetch(`/api/categories`, {
                   method: 'PUT',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({slug: item.slug, title: value})
               });
console.log('res, ', res)
               if (res.ok) {
                toast.success('دسته بندی با موفقیت ویرایش شد.');
                setTimeout(() => {
                  router.push('/dashboard/poems');
                  router.refresh();
                }, 3000);
              } else {
                toast.error('خطا در ویرایش دسته بندی.');
                throw new Error('Failed to update post');
              }
           } catch (error) {
               // Handle error
               console.error('Error edited category:', error);
           }
       }
       // eslint-disable-next-line react-hooks/exhaustive-deps
       useEffect(() => {setValue(item?.title || '')},[])
  return (
    <>
       <ToastContainer  position="top-right"  autoClose={5000} />
    <div className='flex  justify-end'>
   
    <button className='px-5 py-2 bg-green-400 rounded-md' onClick={()=>setOpen(!open)}>ویرایش</button>
    <button className='px-5 py-2 bg-red-400 rounded-md mx-3' onClick={()=>removeHandle(item.slug)}>حذف</button>

    </div>
   {open ? <div className='my-5'>
     <form onSubmit={editCategoryName}>
     <input type="text" value={value}  className='text-red-500 px-2 w-full h-10 rounded-md border' onChange={(event)=>setValue(event.target.value)} />
     <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-5' type='submit'>ثبت</button>
     </form>
     </div>
     
     : '' }
    </>
  )
}

export default RemoveCategory