import React from 'react'
import Logo from '../assets/logo-2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' sticky w-full top-0 bg-white flex flex-row h-[90px] items-center justify-between ' >
      <span className='ml-[90px] flex flex-row items-center '>
        <img src={Logo} alt='logo' style={{width: '100px'}} />
        <p className='  font-julee text-[20px]'>Learnode</p>
      </span>
      <div className=' mr-[149px] flex space-x-7 font-nunito font-medium text-[15px] items-center'>
        <Link to='/' >Home</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/about' >About us</Link>
        <Link to='/help' >Help</Link>
        <Link to='/pricing' className='bg-[#212E52] text-white rounded w-[170px] h-[40px] flex items-center justify-center ' >Join our Community</Link>
      </div>
    </div>
  )
}

export default Navbar