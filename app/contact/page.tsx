"use client"

import React from 'react'
import Contact from '../Components/Home/Contact/Contact'
import ResponsiveNav from '../Components/Home/Navigation/ResponsiveNav'

export const contact = () => {
    const openNav = () => {
        console.log("Nav opened");
      };
    
      const closeNav = () => {
        console.log("Nav closed");
      };
  return (
    <>
    <ResponsiveNav openNav={openNav} closeNav={closeNav} />
    <div className='mt-[100px]'>
        <Contact/>
    </div>
    </>
  )
}

export default contact