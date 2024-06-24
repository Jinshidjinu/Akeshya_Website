import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/Assets/images/logo.png";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
interface Props {
  openNav: () => void;
}

const Nav: React.FC<Props> = ({ openNav }) => {
  const [scroll, setIsScrolled] = useState(false);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed  z-50 duration-200 ease-out top-0 right-0 left-0  w-full  xl:px-24 2xl:px-32 px-4 sm:px-6 md:px-16 lg:px-20 ${
        scroll ? "h-24" : "h-28"
      }  flex flex-col justify-center ${
        scroll ? "shadow-custom" : "shadow-none"
      } bg-white `}
    >
      <div className="container mx-auto flex justify-between px-2 md:px-0 items-center">
        <div className="flex items-center">
          <Image alt="logo" className="w-16 h-16 cursor-pointer" src={Logo} />
          <span className="text-blue-900 cursor-pointer font-bold text-3xl leading-none font-Raleway ml-2">
            AKESHYA
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-gray-600">
          <Link href={`/`} >
            <li className="cursor-pointer">Home</li>
            </Link>
            <Link href={`/about`} >
              <li className="cursor-pointer">About</li>
            </Link>
            <li className="cursor-pointer" onClick={() => handleNavClick("services")}>Service</li>
          </ul>
          <Link href={`/contact`} >
          <button className="ml-4 px-6 py-2 bg-blue-900 text-white rounded-full text-sm">
            Contact us
          </button>
          </Link>
        </div>

        <div className="md:hidden" onClick={openNav}>
          <Bars3Icon className="w-8 h-8 text-gray-800 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Nav;
