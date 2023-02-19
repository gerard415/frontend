import React from 'react'
import image from '../assets/expectation.png'

const Expectation = () => {
  return (
    <div className=' h-[600px] flex justify-between font-nonito pb-[120px] pt-[120px] ' >
        <span className=' ml-[120px] space-y-2 ' >
            <h1 className='text-[37px] font-bold ' >Our Expectation</h1>
            <p className='text-gray-600 text-[18px] '>Our Expectation is that users can easily navigate and <br /> interact with the various features of our subscription- <br /> based online learning platform. From registering for <br /> the platform and accessing content on the free plan, <br /> to upgrading to a higher subscription and <br /> participating in live teaching events, our platform <br /> offers a variety of options for users to access and <br /> engage with educational content. By following this <br /> user flow, users can easily access and utilize all of the <br />  features of our platform to further their learning and <br /> development.</p>
        </span>
        <img src={image} style={{width:'600px'}}  alt="" />
    </div>
  )
}

export default Expectation