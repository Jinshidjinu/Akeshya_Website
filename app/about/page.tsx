'use client'

import React from 'react'
import About from '../Components/Home/About/About'
import ResponsiveNav from '../Components/Home/Navigation/ResponsiveNav'

const page :React.FC = () => {
  return (
    <>
    <ResponsiveNav  />
    <div className='mt-[100px]'>
      <About/>
    </div>  
    </>
  )
}

export default page