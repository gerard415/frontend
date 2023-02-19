import React from 'react'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='border-solid border-2 border-black-500 w-full h-[400px] flex justify-between pt-10 pb-10' >
      <div className='font-nonito ml-[130px] flex flex-col space-y-2 ' >
        <h1 className='text-[35px] font-bold ' >View and create the <br/> best Educational <br/> Content</h1>
        <p className='text-[20px] text-gray-600 ' >Our online learning platform allows users <br/> to access a variety of education, <br/> including, videos, posts, polls and stories.</p>
        <button className='text-white bg-[#212E52] w-[150px] h-[40px] rounded ' >Start Now</button>
      </div>
      <img src={heroImage} alt="heroImage" style={{width: '600px'}} />
    </div>
  )
}

export default Hero