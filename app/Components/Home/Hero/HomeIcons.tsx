import React from 'react'
import Image from 'next/image'
 

const HomeIcons = () => {
  return (
    <div className='w-full h-[200px] bg-white flex justify-center items-center '>
        <div className='image-component'>
          <Image src="/Assets/images/client-1.png" width={100} height={50} alt=''/>
        </div>
        <div className='image-component'>
          <Image src="/Assets/images/client-2.png" width={100} height={50} alt=''/>
        </div>
        <div className='image-component'>
          <Image src="/Assets/images/client-3.png" width={100} height={50}  alt=''/>
        </div>
        <div className='image-component'>
          <Image src="/Assets/images/client-4.png" width={100} height={50}  alt=''/>
        </div>
        <div className='image-component'>
          <Image src="/Assets/images/client-5.png" width={100} height={50}  alt=''/>
        </div>
        <div className='image-component'>
          <Image src="/Assets/images/client-6.png" width={150} height={100} alt=''/>
        </div>
    </div>
  )
}

export default HomeIcons