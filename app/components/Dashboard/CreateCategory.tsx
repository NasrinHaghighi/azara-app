'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Createcategory() {
    const [title, setTitle] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        const slug = title.toLowerCase().replace(/\s+/g, '-');

        const newCategory = {
            title: title,
            slug: slug,
        };

        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCategory) // Remove the extra wrapping of newCategory inside curly braces
            });
            
          
            if (res.ok) {
                toast.success('دسته بندی با موفقیت ایجاد شد.');
                setTimeout(() => {
                  router.push('/dashboard/poems');
                  router.refresh();
                }, 3000);
            }else {
                toast.error('خطا در ایجاد دسته بندی.');
                throw new Error('Failed to update post');
            }

            // Reset the title input after successful submission
            setTitle('');
        } catch (error) {
            console.error('Error creating category:', );
            // Handle error here, for example, display an error message to the user
        }
    };
    

  return (
    <>
  <ToastContainer  position="top-right"  autoClose={5000} />
    <div className='bg-slate-200 p-5 rounded-lg shadow-md '>
         <h2 className="text-lg font-semibold mb-4">ایجاد دسته بندی جدید</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    {/* <label htmlFor="نام دسته یندی" className="block text-sm font-medium text-gray-700">Title</label> */}
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full " required placeholder='نام دسته را وارد کنید'/>
                </div>
                {/* <div className="mb-4">
                    <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input type="text" id="img" name="img" value={img} onChange={(e) => setImg(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                </div> */}
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">ثبت</button>
            </form>
    </div>
    </>
  )
}

export default Createcategory