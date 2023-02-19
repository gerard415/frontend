import React from 'react'
import Logo from '../assets/logo-3.png';

const Footer = () => {
  return (
    <div className='bg-[#272727] w-full text-white h-[400px] flex justify-between pl-[90px] pr-[90px]' >
      <div className='pt-[90px] pb-[90px] space-y-4 w-[240px]'> 
        <span className='flex flex-row items-center '>
          <img src={Logo} alt='logo' style={{width: '100px'}} />
          <p className='  font-julee text-[50px]'>Learnode</p>
        </span>
        <p className='text-gray-400 text-[14px] '>© Copyright 2023 Learnode.com - All <br/> Rights are Reserved</p>
        <input className='bg-neutral-700 w-full p-1 rounded border border-slate-50 ' type="text" placeholder='Email' />
        <div className='flex flex-row justify-between'>
          <button className='bg-white text-black w-[100px] text-[10px] font-bold rounded '>Submit</button>
          <p className='text-gray-300 text-[10px]'>Get find out more about <br/> promotions and consultations <br/> in your inbox:</p>
        </div>
      </div>

      <div className='grid grid-rows-6 grid-flow-col gap-x-14 pt-[90px] pb-[90px] '>
        <div>About us</div>
        <div className='font-nunito text-gray-400 text-[14px] '>Why Education</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Our Team</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Careers</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Partners</div>
        <div></div>
        <div>Services</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Videos</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Live Streams</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Stories</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Posts</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >Polls</div>
        <div className='justify-self-end ' >Contact</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >+234 222 333 4567</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >info@learnode.com</div>
        <div className='font-nunito text-gray-400 text-[14px] ' >16</div>
      </div>
    </div>
  )
}

export default Footer