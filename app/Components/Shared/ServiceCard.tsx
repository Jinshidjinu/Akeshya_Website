import React from 'react';
import { BiTachometer } from "react-icons/bi";


interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => {
    return (
        <div className='p-10 rounded-lg cursor-default service_card relative flex-1 md:h-32 h-auto min-w-[100px] overflow-hidden'
         style={{boxShadow:"0px 0px 10px 1px #eaeaea",minHeight:"400px"}}
        >
            <div className='absolute service_circle -z-10 -top-10 -right-10 h-24 w-24 flex justify-center items-center rounded-[4rem] bg-[#e1f0fa]
             transition-all duration-500 transform scale-100
            '></div>
            <div className='h-16 flex circle justify-center items-center w-16 rounded-full bg-[#142796]  '>
              {  icon === 'tachometer' ? <BiTachometer className='text-[2.7rem] text-white icon' /> : <i className={`${icon} icon text-[2.2rem] text-white`}></i>}
            </div>
            <h3 className='font-medium title my-4 font-sans text-[1.2rem] mb-[.1rem]'>{title}</h3>
            <p className='text-[.93rem] description font-normal my-4 font-sans tracking-wider text-[#191919]'>
                {description}
            </p>
        </div>
      )
}

export default ServiceCard;
