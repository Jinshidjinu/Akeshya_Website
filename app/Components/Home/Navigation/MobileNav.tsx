import React from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';

interface Props {
  nav: boolean;
  closeNav: () => void;
}
 
const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div className={`fixed ${navAnimation} top-0 left-0 right-0 bottom-0 z-[1000] bg-black transition-transform duration-300`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-4'>
      <ul className='flex items-center justify-center cursor-pointer text-[15px] text-[#555555] gap-9'>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
            </ul>

            <button className='w-[130px] ml-5 h-[40px] bg-[#14279b] text-[#fff] rounded-full font-[400] text-[15px] '>Contact us</button>
      </div>
      <div onClick={closeNav} className='absolute z-[100000000] top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400 cursor-pointer'>
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
