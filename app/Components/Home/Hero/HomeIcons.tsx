import React from 'react';
import Image from 'next/image';

const HomeIcons = () => {
  return (
    <div className='w-full h-auto bg-[#F3F9FD] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 py-2'>
      <div   className='flex justify-end items-center filter grayscale hover:grayscale-0 duration-200 ease mr-4'>
        <Image src="/Assets/images/client-1.png" width={100} height={50} alt='Client 1' data-aos="zoom-in"/>
      </div>
      <div   className='flex justify-end items-center filter grayscale hover:grayscale-0 duration-200 ease p-4'>
        <Image src="/Assets/images/client-2.png" width={100} height={50} alt='Client 2' data-aos="zoom-in"/>
      </div>
      <div data-aos="zoom-in" className='flex justify-center items-center filter grayscale hover:grayscale-0 duration-200 ease p-4'>
      <Image src="/Assets/images/client-3.png" width={100} height={50} alt='Client 2' data-aos="zoom-in" />
      </div>
      <div  className='flex justify-center items-center filter grayscale hover:grayscale-0 duration-200 ease p-4'>
        <Image src="/Assets/images/client-4.png" width={100} height={50} alt='Client 4' data-aos="zoom-in"/>
      </div>
      <div  className='flex justify-start items-center filter grayscale hover:grayscale-0 duration-200 ease p-4'>
        <Image src="/Assets/images/client-5.png" width={100} height={50} alt='Client 5' data-aos="zoom-in"/>
      </div>
      <div  className='flex justify-start items-center filter grayscale hover:grayscale-0 duration-200 ease p-4'>
        <Image src="/Assets/images/client-6.png" width={100} height={50} alt='Client 6' data-aos="zoom-in"/>
      </div>
    </div>
  );
}

export default HomeIcons;

