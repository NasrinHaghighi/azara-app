'use client';

//import SigninbyGoogle from '../../../components/SigninbyGoogle/SigninbyGoogle';
import { useFormik } from "formik";
import { useRouter } from 'next/navigation';
import * as Yup from "yup";
import Link from 'next/link';
import { ToastContainer, toast,Zoom, Bounce} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Image from "next/image";
import Book from '../../../public/img/books (1).png'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
  
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(5, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });
  
function RegisterPge() {

    const router = useRouter()
    const formik = useFormik({
      initialValues: {
       name:'', 
       email: '',
       password:''
      },
     
    validationSchema: SignupSchema,
      onSubmit : async (values) => {
        console.log(values)
  const res = await fetch('/api/user', {
  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
  if(res.ok) {
    
    toast.success('ثبت نام شما با موفقیت انجام شد.')
 setTimeout(() => {
  router.push('/signin')
 },3000)
  
  }else{
    console.log(res)
    toast.error('ثبت نام شما با خطا مواجه شد.')
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
        <h1 className='text-2xl font-bold p-8 text-center '>ایجاد حساب کاربری </h1>
       <div className='mb-5'>
        <label htmlFor="first_name" className="block md-2 text-sm font-medium text-textColor">نام و نام خانوادگی</label>
          <input
            id="name"
            name="name"
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="علی خلیلی" required 
            onChange={formik.handleChange}
            value={formik.values.name}
          />
           {formik.touched.name && formik.errors.name ? (
                        <div className="input feedback">{formik.errors.name}</div>
                    ) : null} 
          </div>

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md  w-1/2" type="submit">ثبت نام</button>
          </div>
       
            </div>
           
            </form>

 
</>
   );
}

export default RegisterPge