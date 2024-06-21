import React from 'react'
import Headings from '../../Shared/Headings'
import ProcessCard from '../../Shared/ProcessCard'


const  Process:React.FC = () => {

  const processes = [
    {
    
      id:1,
      title:"1.Planning",
      description:"We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we're all on the same page."

    },
    {
      id:2,
      title:"2.Design",
      description:"We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation."
    },
    {
      id:3,
      title:"3.Development",
      description:"We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics."
    },
    {
      id:4,
      title:"4.Marketing",
      description:"We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert."
    }
  ]
  


  return (
    <div>
        <Headings content='Our Process'
         description='Over the years we’ve evolved a tested method for attaining achievement for each one of our clients.'
          />

       <div className='grid grid-cols-1 md:grid-cols-2    gap-y-44 md:gap-y-44  sm:gap-10 px-4 sm:px-6 lg:px-10  w-full h-auto min-h-96' data-aos="fade-up" data-aos-duration="500" >
         {processes.map( process => (
           <ProcessCard
              key={process.id}
              title={process.title}
              description={process.description}
           />

         ))}

       </div>
    </div>
  )
}

export default Process