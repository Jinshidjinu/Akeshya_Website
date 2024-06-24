import React from "react";
import Button from "../../Shared/Button"; // Assuming Button component path
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full mt-28 h-full bg-white flex md:flex-col-reverse md:items-start items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse xl:flex-row">
        {/* Left side content */}
        <div className="flex-1 bg-white p-8 flex flex-col items-center">
          <div className="flex flex-col items-center w-full max-w-screen-md justify-center md:px-20 py-4 font-Raleway">
            {/* Title */}
            <h1
              className="font-bold text-[#14279b] w-full text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Grow your business with Akeshya
            </h1>
    
            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl leading-relaxed my-2 text-gray-800 text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We are a team of talented website designers, developers & digital marketeers
            </p>
    
            {/* Button */}
            <div className="w-full" data-aos="fade-up" data-aos-delay="600">
              <Button
                content="Get Started"
                className="primary"
              />
            </div>
          </div>
        </div>
    
        {/* Right side image */}
        <div
          className="flex-1 bg-white md:p-2 flex mt-4 md:mt-0"
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
        >
          <Image
            src="/Assets/images/hero-img.png" 
            alt="hero-image"
            width={600}
            height={500}
            className="image-animation mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
