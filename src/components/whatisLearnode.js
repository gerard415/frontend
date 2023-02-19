import React from 'react'
import image from '../assets/Rectangle291.png'
import clock from '../assets/clock.png'
import world from '../assets/world.png'
import people from '../assets/people.png'
import line from '../assets/Line 1.png'

const WhatisLearnode = () => {
  return (
    <div className=' font-nonito  h-[750px] flex flex-col items-center mt-[60px] ' >
        <div className=' w-[1000px] h-[130px] rounded-3xl mb-[80px] shadow-[0_2px_2px_1px_rgba(0,0,0,0.2)] flex justify-between items-center p-10  '>
            <span className='flex items-center space-x-5 '>
                <img src={clock} style={{width: '50px'}} alt="" />
                <p className='text-gray-400 text-[9px]' >Become a content creator in your area <br /> of specialty</p>
            </span>
            <img src={line} className='h-[100px] ' alt="" />
            <span className='flex items-center space-x-5 '>
                <img src={world} style={{width: '50px'}} alt="" />
                <p className='text-gray-400 text-[9px]' >Become a master in any field of <br /> study from all over the word in <br /> any where in the word </p>
            </span>
            <img src={line} className='h-[100px] ' alt="" />
            <span className='flex items-center space-x-5 '>
                <img src={people} style={{width: '50px'}} alt="" />
                <p className='text-gray-400 text-[9px]' >Build your career and profile <br /> with mentors and professionals <br /> in your area of interest.</p>
            </span>
        </div>
        <div className=' w-full h-[400px] flex space-x-14  '>
            <img className='ml-[60px] mt-[40px] ' src={image} style={{width: '600px'}} alt="" />
            <span className=' space-y-3' >
                <div className='flex ' >
                    <div className='bg-[#EBFFF8] w-9 h-1 ' ></div>
                    <div className='bg-[#C8FFED] w-9 h-1 ' ></div>
                    <div className='bg-[#89E9C9] w-9 h-1 ' ></div>
                    <div className='bg-[#61C2A2] w-9 h-1 ' ></div>
                </div>
                <h1 className=' font-bold text-[25px]' >What is Learnode</h1>
                <p className='text-gray-600' >Learnode is an online learning platform allows users to access <br /> a variety of educational content, including videos, posts, polls, and <br /> stories. Creators can post this content and users can <br /> access it through a subscription-based model. Upon <br /> registering for the platform, users are placed on a free plan <br /> which allows them to access certain content for free. However, <br /> they will experience ads within the videos and ads that appear <br /> as actual content posts. Users can upgrade to a higher <br /> subscription plan to remove ads from within the videos, but <br /> they will still see ads that appear as content posts. In addition <br /> to the subscription-based content, our platform also offers live <br /> teaching events which users can pay for separately, regardless <br /> of their subscription plan. In this document, we will outline the <br /> user flow for accessing and interacting with the various <br /> features of our platform.</p>
            </span>
        </div>
    </div>
  )
}

export default WhatisLearnode