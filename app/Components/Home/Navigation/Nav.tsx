import React from 'react';
import Image from 'next/image';
import Logo from '../../../../public/Assets/images/logo.png';
import { Bars3Icon } from '@heroicons/react/16/solid';

interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  return (
    <div>
      <div className='w-[100%] h-[16vh] px-2 flex flex-col justify-center shadow-gray-400 bg-white' style={{ boxShadow: "0px 0px 10px 1px #eaeaea" }}>
        <div className='flex justify-between items-center'>
          <div className='w-[430px] h-[60px] flex items-center justify-center tracking-widest bg-white'>
            <Image alt='logo' className='w-[65px] h-[65px] cursor-pointer' src={Logo} />
            <span className='text-blue-900 cursor-pointer font-[700] text-[30px] leading-none font-Raleway'>AKESHYA</span>
          </div>

          <div className=' w-[590px] h-[65px] py-2 px-4 bg-white flex items-center justify-center'>
            <ul className='flex items-center justify-center cursor-pointer text-[15px] text-[#555555] gap-9'>
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
            </ul>

            <button className='w-[130px] ml-5 h-[40px] bg-[#14279b] text-[#fff] rounded-full font-[400] text-[15px] '>Contact us</button>

            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
