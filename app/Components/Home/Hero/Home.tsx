import React from "react";
import Button from "../../Shared/Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full mt-28 h-full bg-white flex md:flex-col-reverse  md:items-start items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse md:flex-col-reverse xl:flex-row ">
        {/* Text content section */}
        <div className=" flex-1 bg-white  p-8 flex flex-col items-center">
          <div className="flex-1 p-10">
            <h1
              className="font-bold  text-[#14279b] w-full text-[3rem] mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Grow your business with Akeshya
            </h1>
         
            <p className="text-[1.35rem] leading-relaxed my-2 text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="400">
              We are a team of talented website designers, developers & digital
              marketeers
            </p>
            <Button
              content="Get Started"
              className="primary"
              data-aos="fade-up"
            />
          </div>
        </div>

        {/* Image section */}
        <div
          className="flex-1 bg-white md:p-2 flex  mt-4 md:mt-0"
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
