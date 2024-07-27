'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa6";
import Link from 'next/link';
import logo from '@/Assets/logo.webp';
import Cart from './Cart';


const Navbar = () => {

  const [profile, setProfile] = useState(false);
  const [burger, setBurger] = useState(false);
  const [cart , setCart] = useState(false);

  
  const handleProfile = () => {
    setProfile(!profile);
  }

  const handleBurger = () => {
    setBurger(!burger)
  }

  const handleCart = ()=> {
    setCart(!cart)
  }


  return (
    <div className='p-5 md:px-12 lg:px-28 text-white md:flex justify-between max-w-screen-xl m-auto items-center text-xl '>
      <div className='flex justify-between items-center'>
        <Image src={logo} width={180} className='w-[180px] sm:w-auto' alt='LOGO' priority/>
        <RxHamburgerMenu onClick={handleBurger} className=' sm:w-auto cursor-pointer mr-5 text-3xl hover:scale-110 md:hidden' />
      </div>
      <div className='mt-5'>
      {burger ? 
          <ul className=' md:hidden'>
            <Link href='/' onClick={handleBurger}>
              <li className='hover:text-[#d71313] hover:scale-110 w-24 cursor-pointer'>Home</li>
            </Link>
            <Link href='/About-us' onClick={handleBurger}>
              <li className='hover:text-[#d71313] hover:scale-110 w-24 cursor-pointer my-1'>About us</li>
            </Link>
            <Link href='/Products' onClick={handleBurger}>
              <li className='hover:text-[#d71313] hover:scale-110 w-24 cursor-pointer my-1'>Products</li>
            </Link>
            
            <li>
              <div onClick={handleProfile} className='hover:text-[#d71313] hover:scale-110 w-32 cursor-pointer my-1 flex' >My Profile <span><FaCaretDown /></span></div>
              {profile ? 
              <ul className='ml-5'>
                <Link href='/Profile' onClick={handleBurger}>
                <li className='hover:text-[#d71313] hover:scale-110 w-44  cursor-pointer'>Profile information</li>
                </Link>
                <Link href='/Purchased' onClick={handleBurger}>
                  <li className='hover:text-[#d71313] hover:scale-110 w-44  cursor-pointer'>Purchase history</li>
                </Link>
              </ul> 
              :
              ''
              }
            </li>
            <li className='hover:text-[#d71313] hover:scale-110 w-24 cursor-pointer my-1'>Signout</li>
            <div className='flex'>
              <FiShoppingCart className='hover:text-[#d71313] hover:scale-110 cursor-pointer text-3xl my-1' onClick={handleCart} /><span className='text-red-500'>0</span>
            </div>
          </ul>
          :
          ''
          }
          <ul className='md:flex cursor-pointer hidden gap-2'>
            <Link href='/'>
              <li className='hover:text-[#d71313] hover:scale-110 w-20'>Home</li>
            </Link>
            <Link href='/About-us'>
              <li className='hover:text-[#d71313] hover:scale-110 w-24'>About us</li>
            </Link>
            <Link href='/Products' onClick={handleBurger}>
              <li className='hover:text-[#d71313] hover:scale-110 w-24'>Products</li>
            </Link>
            
            <li>
              <div onClick={handleProfile} className='hover:text-[#d71313] hover:scale-110 w-32 flex'>My Profile <span><FaCaretDown /></span></div>
              {profile ? 
              <ul className=''>
                <Link href='/Profile' onClick={handleBurger}>
                  <li className='hover:text-[#d71313] hover:scale-110 w-44 absolute '>Profile information</li>
                </Link>
                <Link href='/Purchased' onClick={handleBurger}>
                  <li className='hover:text-[#d71313] hover:scale-110 w-44 absolute mt-7'>Purchase history</li>
                </Link>
              </ul> 
              :
              ''
              }
            </li>
            <li className='hover:scale-110 w-24 hover:text-[#d71313]'>Signout</li>
            <div className='flex '>
              <FiShoppingCart className='hover:text-[#d71313] hover:scale-110 text-3xl' onClick={handleCart}/><span className='text-red-500 '>0</span>
            </div>
          </ul>
      </div>
      {cart ? <Cart handleCart={handleCart} /> : ''}
      
    </div>
  )
}

export default Navbar