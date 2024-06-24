import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";

interface Props {
  nav: boolean; 
  closeNav: () => void; 
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  // Determine CSS class for navigation animation
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  // Handle navigation item click (scroll to specified ID and close nav)
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <div className={`fixed ${navAnimation} top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-between z-50`}>
      <div>
      </div>
      {/* Main content container */}
      <div className="w-full h-[95%] flex items-center justify-center">
        <div className="w-[90%] h-[90%] bg-white rounded-lg p-0 flex flex-col gap-5">
          {/* Navigation links */}
          <ul className="flex flex-col justify-center cursor-pointer text-[15px] pl-6 pt-5 text-[#555555] gap-4">
            <Link href="/" passHref>
              <li className="hover:text-[#14279b] text-xl" >Home</li>
            </Link>
            <Link href="/about" passHref>
              <li className="hover:text-[#14279b] text-xl" >About</li>
            </Link>
            <li className="hover:text-[#14279b] text-xl" onClick={() => handleNavClick("services")}>Services</li>
          </ul>
          {/* Contact button */}
          <Link href="/contact" passHref>
            <button className='w-[300px] h-[40px] bg-[#14279b] ml-3 text-[#fff] rounded-full font-[400] text-[15px]'>Contact us</button>
          </Link>
          {/* Close navigation button */}
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
