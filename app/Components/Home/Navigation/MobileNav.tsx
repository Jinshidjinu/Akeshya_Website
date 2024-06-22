import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) =>{
    const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";
  return (
    <div className={ `fixed ${navAnimation}  top-0 bottom-0 left-0 right-0 w-full h-full bg-black flex flex-col items-center justify-between z-50`}>
      <div>
      </div>
      <div className="w-full h-[95%] flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-white rounded-lg p-0 flex flex-col gap-5 ">
          <ul className="flex flex-col justify-center cursor-pointer  text-[15px] pl-6 pt-5 text-[#555555] gap-4 ">
            <li className="hover:text-[#14279b]">Home</li>
            <li className="hover:text-[#14279b]">About</li>
            <li className="hover:text-[#14279b]">Service</li>
          </ul>
          <button className='w-[350px]  h-[40px] bg-[#14279b] ml-3 text-[#fff] rounded-full font-[400] text-[15px] '>Contact us</button>
          <div
            onClick={closeNav}
            className="absolute z-[100000000] top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white cursor-pointer"
          >
            <XMarkIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
