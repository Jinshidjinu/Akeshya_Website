import React from 'react';

interface HeadingsProps {
    children?: React.ReactNode;
    className?: string;
    content?: string;
    variant?: 'primary';
    size?: 'sm' | 'md' | 'lg';
}

const Headings: React.FC<HeadingsProps> = ({
    children,
    className = '',
    content = '',
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
        primary: 'bg-white text-[#222222] w-full h-[150px]  uppercase text-[32px] font-bold font-family  text-center text-3xl gap-6 flex items-center justify-center'
    };
    
    const variantClasses = variants[variant] || variants.primary;
    const sizeClasses = sizes[size] || sizes.md;

    return (
        <div 
            className={`${variantClasses} ${sizeClasses} ${className}`}
            {...props}
        >
            <hr  className='h-1 w-[60px] bg-blue-900 '/>
            {content}
            <hr  className='h-1 w-[60px] bg-blue-900'/>
            {children}
        </div>
    );
}

export default Headings;
