import React from 'react'
import 'remixicon/fonts/remixicon.css'

interface FeaturesCardsProps {
    title: string;
    icon: string;
    color: string;
  }


const FeatureCard : React.FC<FeaturesCardsProps> = ({title,icon,color}) => {
  return (
    <div className="flex justify-start w-auto min-w-[12rem] px-10 gap-3 ease-in-out duration-500 items-center hover:bg-[#eef7fc] h-[4.4rem] shadow-sm bg-[#f6f6f8]">
      <i className={icon} style={{ color,fontSize:'30px' }}></i>
      <span className="font-medium font-sans text-[1.1rem] mb-[.1rem]">{title}</span>
    </div>
  );
};


export default FeatureCard