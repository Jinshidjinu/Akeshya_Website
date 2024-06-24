"use client"

import React from 'react'
import Contact from '../Components/Home/Contact/Contact'
import ResponsiveNav from '../Components/Home/Navigation/ResponsiveNav'

const contact: React.FC = () => {
  
  return (
    <>
    <ResponsiveNav />
    <div className='mt-[100px]'>
        <Contact/>
    </div>
    </>
  )
}

export default contact