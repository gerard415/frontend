import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className='relative' >
        <Navbar/>
        <section >
            <Outlet />
        </section>
        <Footer/>
    </div>
  )
}

export default SharedLayout