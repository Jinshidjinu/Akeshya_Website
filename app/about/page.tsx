'use client'

import React from 'react'
import About from '../Components/Home/About/About'
import ResponsiveNav from '../Components/Home/Navigation/ResponsiveNav'

function page() {
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
      <About/>
    </div>
    </>
  )
}

export default page