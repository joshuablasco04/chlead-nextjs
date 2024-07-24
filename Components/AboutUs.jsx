'use client'
import React ,{useEffect}from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiGlobalFill, RiBuildingLine } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";
import { AiFillLike } from "react-icons/ai";
import { FaBullseye } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaHandshake, FaHardHat, FaTrophy } from "react-icons/fa";
import stat from '@/Assets/stats-1.jpg'
import stat2 from '@/Assets/stats-2.jpg'
import banner from '@/Assets/banner.jpg'
import Image from 'next/image';

const AboutUs = () => {

    useEffect(()=> {
        Aos.init();
    },[])

  return (
    <div>
      <div className='text-white text-center md:mt-10 max-w-2xl m-auto' data-aos="fade-up">
        <h1 className='font-extrabold text-3xl mx-5 md:text-5xl'>Your Partner for Complete High-grade Industrial Needs and Services </h1>
        <button className='mt-10 border p-4 rounded flex justify-center m-auto place-items-center gap-2 hover:border-blue-600'>
            Read More<span><MdOutlineKeyboardDoubleArrowRight /></span>
        </button>
      </div>
      <section className='max-w-screen-xl m-auto'>
        <div className='text-white bg-gray-800 m-5 p-5 mt-24 rounded-xl '>
              <h2 className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-36 h-16 place-items-center  flex text-xl' >About Us</h2>
          <div className='md:grid md:grid-cols-2 md:gap-5 md:p-5'>
            <div>
              <h2 className='text-2xl font-bold my-5'>About CH Lead</h2>
              <p className="text-gray-300" data-aos="fade-up">
                At <strong>CH LEAD Industrial Supply</strong> we redefine excellence as a versatile supplier of industrial parts and services of industrial materials, equipment, and other industrial needs. 
              </p>
              <br/>
              <h2 className="text-2xl font-bold my-5">CH Lead as your partner</h2>
              <p className="text-gray-300" data-aos="fade-up">
                  Our commitment as your trusted partner is exemplified through our complete delivery and service acceptance of any industrial needs. Striving for nothing less than perfection, a highest level of quality is a vital concern of CH-LEAD Industrial Supply, ensuring that we do not just meet your expectations, we exceed them.
              </p>
              <br/>
              <h2 className="text-2xl font-bold my-5">Technical Prowess and Specialization</h2>
              <p className="text-gray-300" data-aos="fade-up">
                  What sets us apart is our skilled team's technical proficiency in various specializations. Regular quality system reviews drive our continuous improvement. You'll receive not only products but expert-backed solutions.                    
              </p>
            </div>
            <div className="md:grid md:grid-rows-3 md:items-center mt-10">
                <div className="flex text-2xl font-bold my-5 gap-2  " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
                    <span className='text-[#d71313] bg-black w-16 flex justify-center items-center rounded'><RiGlobalFill /></span>
                    <h4>The reliable industry takes many forms</h4>
                </div>
                <div className="flex text-2xl font-bold my-5 gap-2 " data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
                    <span className='text-[#d71313] bg-black w-16 flex justify-center items-center rounded'><FiBarChart2 /></span>
                    <h4>Delivering beyond possible solutions</h4>
                </div>
                <div className="flex text-2xl font-bold my-5 gap-2 "  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <span className='text-[#d71313] bg-black w-16 flex justify-center items-center rounded '><AiFillLike /></span>
                    <h4>Success through human resources</h4>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
        <div className='text-white bg-gray-800 m-5 p-5 mt-24 rounded-xl'>
            <div >
                <div >
                    <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Mission and Vision</p>
                    <br/>
                    <h2 className='text-2xl font-bold my-5 flex gap-2'><FaBullseye className='text-red-600'/> Mission</h2>
                    <p data-aos="fade-up" className="text-gray-300">
                        Continuously innovate and improve our skills to provide the right industrial solutions. Committed to producing quality products at a competitive cost, and providing on-time deliveries and exceptional service, we aim to uphold the values of high business ethics, standards, and practices. 
                    </p>
                </div>
                <div >
                    <br/>
                    <h2 className='text-2xl font-bold my-5 flex gap-2'><IoEyeSharp className='text-red-600'/>   Vision</h2>
                    <p data-aos="fade-up" className="text-gray-300">
                        To be the most diversified and prominent group in providing the right industrial solutions for every needs. 
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
        <div className='text-white bg-gray-800 m-5 p-5 mt-24 rounded-xl md:grid grid-cols-2'>
            <div >
                  <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>Company</p>
                <h2 className="text-2xl font-bold my-5">Our stats</h2>
                <p data-aos="fade-up" className="text-gray-300">
                    We leverage a team of committed experts and seasoned professionals who bring a rich reservoir of experience and expertise to each project. Our profound understanding of the industry and practical know-how empower us to address the most intricate industrial issues, delivering customized solutions that yield tangible outcomes.
                </p>
                <div className='grid grid-cols-2 my-5 gap-5'>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
                        <span className='text-[#d71313] text-3xl'><RiBuildingLine /></span>
                        <h4 className="text-2xl font-bold ">10</h4>
                        <p>Nationwide Branches</p>
                    </div>
                    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back"data-aos-delay="500" data-aos-offset="0">
                        <span className='text-[#d71313] text-3xl'><FaHardHat /></span>
                        <h4 className="text-2xl font-bold ">50</h4>
                        <p>Qualified Engineers</p>
                    </div>
                    <div data-aos="fade-zoom-in"data-aos-easing="ease-in-back" data-aos-delay="700" data-aos-offset="0">
                        <span className='text-[#d71313] text-3xl'><FaHandshake /></span>
                        <h4 className="text-2xl font-bold ">56</h4>
                        <p>Clients</p>
                    </div>
                    <div data-aos="fade-zoom-in"data-aos-easing="ease-in-back" data-aos-delay="900"data-aos-offset="0">
                        <span className='text-[#d71313] text-3xl'><FaTrophy /></span>
                        <h4 className="text-2xl font-bold ">2580</h4>
                        <p>Completed Projects</p>
                    </div>
                </div>
          </div>
          <div className='grid gap-2 justify-center md:grid md:grid-rows-2 items-center'>
              <Image src={stat} width={400} data-aos="flip-right"/>
              <Image src={stat2} width={400} data-aos="flip-right"/>
          </div>
        </div>
      </section>
      <section className='max-w-screen-xl m-auto'>
        <div className=' bg-gray-800 m-5 my-24 p-5 text-white rounded-xl'>
          <p className='bg-gradient-to-r from-[#d71313] to-gray-800 text-white font-bold py-2 px-4 w-56 h-16 place-items-center  flex text-xl'>More Info</p>
          <div className='md:grid grid-cols-2 gap-2'>
            <div >
              <h2 className="text-2xl font-bold my-5">We Believe In Building Long Lasting Business Relationship</h2>
              <p className="text-gray-300">
                  While we have a global reach, we understand the importsnce of local support. Our network of offices and partners accross countries allows us to serve you with the personal touch of local company, while leverating our global resources.
              </p>
            </div>
            <div className='flex'>
              <Image src={banner}/>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default AboutUs