import React from 'react'
import Button from '../../Helper/Button'
import Image from 'next/image'
const Home = () => {
  return (
    <div>
        <div className='w-full h-screen bg-green-600 flex'>
            
            <div className='w-1/2 h-full bg-white flex justify-center items-center '>
               
               <div className='w-[550px] h-[400px] bg-white text-4xl flex flex-col gap-2 '>
                <div>

                  <h1>Grow your business with</h1>
                  <h1>Akeshya</h1>
                </div>

                  <div className='text-[19px] flex flex-col gap-8 '>
                  <p className=''>
                  We are team of talented website designers, developers & digital marketeers
                  </p>
        
                  <Button content='Get Started' className='primary'/>
                  </div>

                

                   </div>
               </div>

               <div className='w-1/2 h-full bg-white flex items-center  '>
                 <Image src="/Assets/images/hero-img.png" alt='hero-image ' width={600} height={500}/>
               </div>

               
              
            </div>

        </div>
    
  )
}

export default Home