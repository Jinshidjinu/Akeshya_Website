import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  content?: string;
  variant?: 'primary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className, 
  content, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}) => {
  
  const sizes = {
    sm: 'text-sm px-2 py-1',
    md: 'text-md px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const variants = {
    primary: 'bg-white text-[#14279b] w-[170px] h-[55px] font-[500] font-family: "Raleway" text-[16px] border border-[#14279b]  border-2 rounded-full   hover:bg-[#14279b] hover:text-white duration-300',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  
  return (
    <button 
    className={` ${variantClasses} ${sizeClasses} ${className || ''}`}
    onClick={onClick}
    {...props}
  >
    {  children || content}
  </button>
  );
}

export default Button;
