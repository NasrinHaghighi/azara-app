'use client'
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import * as Yup from "yup";
import Link from 'next/link';
//import { useSession } from "next-auth/react";
import SignbyGoogle from '../../components/SigninbyGoogle/SignbyGoogle';
import { signIn } from 'next-auth/react';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import Book from '../../../public/img/books (1).png'


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

function SignPage() {
  
    const router = useRouter()
    const formik = useFormik({
      initialValues: {
       email: '',
       password:''
      },
     
    validationSchema: SignupSchema,
      onSubmit : async (values) => {
  
      const signInData = await signIn('credentials', {
        email: values.email,
        password: values.password,redirect: false
      })
    //console.log(signInData)
      if (signInData?.error) {
        //console.log('Error during sign-in:', signInData.error);
        toast.error('ایمیل یا رمز عبور اشتباه است.')
      } else{
        toast.success('خوش آمدید.')
        setTimeout(() => {
          router.push('/')
         },3000)
      }
      },
     })

    return (
        <>
         <ToastContainer  position="top-right"  autoClose={5000} />
          <form onSubmit={formik.handleSubmit} >
            <div className="grid gap-6 mb-5 max-w-3xl mx-auto pt-10 px-5">
               
                    <Link href='/' className='m-auto'>
                    <Image src={Book}  width={45} height={45} alt="Book" />
                    </Link>
             
            <h1 className='text-2xl font-bold p-8 text-center '>ورود به حساب کاربری </h1>
      
    
              <div className='mb-5'>
              <label htmlFor="email" className="block  text-sm font-medium text-textColor mb-2">ایمیل</label>
              <input
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required 
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
                {formik.touched.email && formik.errors.email ? (
                            <div className="input feedback">{formik.errors.email}</div>
                        ) : null} 
              </div>
    
              <div className='mb-10'>
               <label htmlFor="password" className="block text-sm font-medium text-textColor mb-2 ">پسورد</label>
              <input
                id="password"
                name="password"
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******" required 
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            {formik.touched.password && formik.errors.password ? (
                            <div className="input feedback">{formik.errors.password}</div>
                        ) : null} 
              </div>
              <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  w-1/2" type="submit">ورود</button>
              </div>
           
                </div>
               
                </form>
                {/* /** Code to be completed */ }
    {/* GO TO REGISTERATION */}
    <div className='text-center p-5'> هنوز حساب کاربری ندارید? <Link href='/register' className='text-green-500 font-semibold'>اینجا ثبت نام کنید.</Link></div>
{/*     
    <div className="flex justify-center items-center mt-4 mb-4">
  <hr className="w-1/4 border-gray400"></hr>
  <div className="mx-4 text-gray400 font-bold">or</div>
  <hr className="w-1/4 border-gray400"></hr>
</div>

 <SignbyGoogle /> */}
        </>
  )
}

export default SignPage