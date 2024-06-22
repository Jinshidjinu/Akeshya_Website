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
        primary: 'bg-white text-[#222222] w-full h-auto text-[32px] font-bold text-center gap-6 flex flex-col items-center justify-center py-6',
        secondary: 'text-red-400'
    };

    const variantClasses = variants[variant];
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <div 
            className={`${variantClasses} ${sizeClasses} ${className} my-14`} 
            {...props}
            data-aos="fade-up"
        >
            <div className='flex justify-center items-center gap-4'>
                <hr className='h-1 w-[80px] bg-blue-900' />
                <span className='text-[#444343e7]'>{content}</span>
                <hr className='h-1 w-[60px] bg-blue-900' />
            </div>
             
            {description && (
                <p className=' text-[#555555dd] font-medium font-sans px-10 text-[1.03rem] mt-2'>
                    {description}
                </p>
            )}

            {children}
        </div>
    );
}

export default Headings;
