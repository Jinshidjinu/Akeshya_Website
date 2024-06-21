"use client";

import React from 'react'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const  Footer:React.FC = ()=>{

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        setIsVisible(window.scrollY > 0);
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div>

<div className='w-[100%]  h-[16vh] px-2 flex flex-col justify-center  shadow-gray-400   bg-white '>
           <div className='flex   justify-between items-center  '>
            <div className='w-[430px] h-[60px] flex items-center justify-center  bg-white'>
             <p className='text-sm'>© Copyright <span className='text-black cursor-pointer font-[700] text-[14px] leading-none font-Raleway'>AKESHYA.</span> All Rights Reserved</p>
              
            </div>
            <div className=' w-[590px] h-[65px] py-2 px-4 bg-white flex items-center  justify-center'>

                <ul className='flex  items-center justify-center cursor-pointer text-[15px] text-[#14279b] gap-6'>
                    <a href='https://akeshya.com/Terms%20and%20conditions.pdf'>Terms and conditions  </a>
                    <a href='https://akeshya.com/Refund%20policy.pdf'>Refund policy </a>
                    <a href='https://akeshya.com/Privacy%20policy.pdf'>Privacy policy </a>
                   
                  
                </ul>
            </div>
           </div>
       </div>
       <div
        style={{ display: isVisible ? "block" : "none" }}
        className="w-10 h-10 bg-blue-800 rounded fixed bottom-11 right-11 flex items-center justify-center"
        onClick={scrollToTop}
      >
        <a href="#" className="flex items-center justify-center w-full h-full">
          <FaArrowUp className="text-1xl text-white" />
        </a>
      </div>
    </div>
  )
}

export default Footer