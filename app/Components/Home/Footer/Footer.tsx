import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      <div className="w-full h-auto px-4 py-4 flex flex-col justify-center shadow-gray-400 bg-white" style={{ boxShadow: "0px 0px 10px 1px #eaeaea" }}>
        <div className="container mx-auto flex flex-wrap justify-between items-center p-5">
          <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center px-10 md:justify-start">
            <p className="text-sm text-center md:text-left">
              © Copyright
              <span className="text-black cursor-pointer font-bold text-14px leading-none font-Raleway">
                AKESHYA.
              </span>
              All Rights Reserved
            </p>
          </div>
        
          <div className="w-full md:w-1/2 lg:w-3/5 py-2 px-10 flex items-center justify-center  md:justify-end">
            <ul className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-15px text-[#14279b]">
              <li>
                <a href="https://akeshya.com/Terms%20and%20conditions.pdf">Terms and conditions</a>
              </li>
              <li>
                <a href="https://akeshya.com/Refund%20policy.pdf">Refund policy</a>
              </li>
              <li>
                <a href="https://akeshya.com/Privacy%20policy.pdf">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{ display: isVisible ? 'flex' : 'none' }}
        className="w-10 h-10 bg-blue-800 rounded-full fixed bottom-4 right-4 items-center justify-center cursor-pointer"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-xl text-white" />
      </div>
    </div>
  );
};

export default Footer;
