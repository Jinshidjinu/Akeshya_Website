import React from 'react'


interface ProcessCardProps {
    title:string;
    description:string;
}


const  ProcessCard: React.FC<ProcessCardProps> = ({title,description}) => {
  return (
    <div className=' service_card max-w-[576px] process_card  mx-auto cursor-default bg-[#f6f6f6] px-3  flex-1 md:h-[150px] h-auto min-w-[100px]  overflow-hidden'
     style={{boxShadow:"0px 0px 10px 1px #eaeaea"}}
    >
     <h3 className='font-medium title my-4 font-sans text-[1.2rem] mb-[.1rem] text-center '>{title}</h3>
     <p className='text-[.93rem] description font-normal my-4 font-sans tracking-wider text-[#191919]'>
                {description}
            </p>
    </div>
  )
}

export default ProcessCard