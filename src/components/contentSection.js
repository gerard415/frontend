import React from 'react'
import picture from '../assets/Ellipse 14.png'

const ContentSection = () => {
  return (
    <div className='bg-[#272727] w-full h-[500px] flex justify-between p-5  ' >
        <div className='text-white font-nonito ml-[60px] mt-[50px] space-y-2 ' >
            <h1 className='text-[45px] ' >Become a Content Creator <br/> for <span className='text-[#61C2A2] ' >LEARNODE</span></h1>
            <p className='text-gray-400 text-[22px] ' >You can become a content creator now, and sale your brand <br/> by showcasing your unique skills and mentorship with <br/> Videos, Photos, Posts, Polls, and Stories.</p>
            <button className='bg-[#61C2A2] w-[240px] rounded h-8 text-[12px] text-black font-bold ' >Become a Content Creator</button>
        </div>
        <img className='mr-[60px] ' src={picture} alt="pic" style={{width: '500px'}}  />
    </div>
  )
}

export default ContentSection