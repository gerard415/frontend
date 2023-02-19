import React from 'react'
import Hero from '../components/hero'
import ContentSection from '../components/contentSection';
import { Link, Outlet } from 'react-router-dom';
import ReadySection from '../components/readySection';
import WhatisLearnode from '../components/whatisLearnode';
import Expectation from '../components/expectation';
import UseLearnode from '../components/useLearnode';


const Homepage = () => {
  return (
    <div>
        <Hero/>
        <WhatisLearnode/>
        <UseLearnode/>
        <Expectation/>
        <ReadySection/>
        <ContentSection/>
    </div>
  )
}

export default Homepage