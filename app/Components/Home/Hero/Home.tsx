import React from 'react';
import Button from '../../Shared/Button';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="w-full h-full bg-white flex md:flex-col-reverse  md:items-start items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse xl:flex-row ">
        {/* Text content section */}
        <div className="md:w-1/2 bg-white  p-8 flex flex-col items-center">
          <div className="max-w-lg ">
            <h1 className="font-bold text-[#14279b] text-4xl mb-4">Grow your business with</h1>
            <h2 className="font-bold text-[#14279b] text-4xl mb-8">Akeshya</h2>
            <p className="text-lg mb-8">
              We are a team of talented website designers, developers & digital marketeers
            </p>
            <Button content="Get Started" className="primary" />
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 bg-white md:p-2 flex  mt-4 md:mt-0">
          <Image src="/Assets/images/hero-img.png" alt="hero-image" width={600} height={500}  />
        </div>
      </div>
    </div>
  );
};

export default Home;
