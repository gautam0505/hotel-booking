"use client"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '@/Components/Header';
import Link from 'next/link';
import React, { useState } from 'react';

const Page = () => {
  const notify = ()=>{
    console.log("hello")
    toast.success('Login Successfull', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
      
  }
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (event.target.value === password) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      console.log('Passwords matched:', password);
    } else {
      console.error("Passwords don't match");
    }
  };

  return (

    
    <div className='flex w-screen h-screen mx-10 p-10'>
     
      <div className='w-2/4 h-full p-8 fixed top-0 bottom-0 overflow-y-auto'>
             <h1 className='font-semibold text-5xl my-[40px]'>Welcome Back</h1>
             <h5 className='font-light text-gray-500 mt-[-20px]'>Please log into your account</h5>
        <form onSubmit={handleSubmit} className='mt-10'>
            
                <span className='flex mt-8 mb-3'>Email</span>
                <input
                    type='text'
                    className='border-neutral-400 border-[1px] rounded p-3 w-7/12'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    <span className='flex mt-8 mb-3'>Password</span>
                    <div className='relative'>
                        <input
                        type={showPassword ? 'text' : 'password'}
                        className='border-neutral-400 border-[1px] rounded p-3 w-7/12'
                        value={password}
                        onChange={handlePasswordChange}
                        />
                    <button
                    type='button'
                    className='absolute top-0 right-[275px] mt-3 mr-3 text-sm'
                    onClick={togglePasswordVisibility}
                    >
                {showPassword ? (
                    <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 17l5-5-5-5m-5 10h10'
                    />
                    </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 17l5-5-5-5m-5 10h10'
                  />
                </svg>
              )}
            </button>
          </div>
          <br/><br/>
          <a href='#' className='text-teal-600 '>Forgot Password ?</a>
          <button

            onClick={notify}
            type='submit'
            className='flex mt-10 bg-teal-600 w-7/12 p-4 rounded justify-center text-white'
          >
             <Link href="/">Login</Link>
          </button>
          <ToastContainer/>
        </form>
            <br/>
            <br/><br/>

        <span className=' font-medium text-gray-500 p-20'>Don't Have an Account? <Link href="/sign-up" className='text-teal-600'>Registration</Link></span>
      </div>
      <div className='w-2/4 h-full fixed top-0 right-0 bottom-0 overflow-y-auto'>
        <img
          className='h-full w-full object-cover'
          src='https://img.freepik.com/premium-photo/building-with-word-hotel-it_878402-2640.jpg?size=626&ext=jpg&ga=GA1.1.1508156185.1706188070&semt=sph'
          alt='Hotel Building'
        />
      </div>
    </div>
  );
};

export default Page;