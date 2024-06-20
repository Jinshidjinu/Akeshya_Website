import React from 'react';

interface HeadingsProps {
    children?: React.ReactNode;
    className?: string;
    content?: string;
    description?: string;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
}

const Headings: React.FC<HeadingsProps> = ({
    children,
    className = '',
    content = '',
    description = '',
    variant = 'primary', 
    size = 'md',
    ...props
}) => {

    const sizes = {
        sm: 'text-sm px-2 py-1',
        md: 'text-md px-4 py-2',
        lg: 'text-lg px-6 py-3'
    };

    const variants = {
        primary: 'bg-white text-[#222222] w-full h-[150px]  text-[32px] font-bold font-family text-center text-3xl gap-6 flex items-center justify-center',
        secondary: 'text-red-400'
    };

    // Type assertion for variant
    const variantClasses = variants[variant as 'primary' | 'secondary'];
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <div 
            className={`${variantClasses} ${sizeClasses} ${className} flex flex-col  `} 
            {...props}
            
        >
          <div className='flex justify-center items-center gap-4'>
            <hr className='h-1 w-[80px] bg-blue-900' />

            {content}
            <hr className='h-1 w-[60px] bg-blue-900' />

          </div>
             
              {description && (
                <p className='text-sm text-[#444444] font-sans  uppercase-none   '>
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}

export default Headings;
