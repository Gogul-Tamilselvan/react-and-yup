"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from "yup";


export default function Home() {

let schema = Yup.object().shape({
  email : Yup.string().email('Invalid email address').required("Email is Required").matches(/^[a-z0-9]+@[a-z]{3,5}\.[a-z]{3,5}$/, "Invalid email format"),
  password: Yup.string().required("enter a correct password").min(6,"min 6 digit required").max(8,"max 8 required"),
})

let {register, handleSubmit, formState:{errors}}=useForm({resolver : yupResolver(schema),});

let handleSave=(data)=>{
  console.log(data);
  // console.log(errors);
  
  
  
}


  return (
<>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
    
    <form className="space-y-4" onSubmit={handleSubmit(handleSave,(err)=>{console.log(err);
    })}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
        {...register('email')}
        autoComplete='off'
        />
         {errors.email && <div>{errors.email.message}</div>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
          {...register("password",{required:true})}
        />
        {errors.password && <div>{errors.password.message}</div>}

      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>

      <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
        Sign In
      </button>
    </form>

    <div className="mt-6 text-center text-sm text-gray-600">
      Don't have an account? 
      <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
    </div>
  </div>
</div>
</>
  );
}
