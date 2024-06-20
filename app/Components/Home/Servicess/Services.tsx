import React from 'react';
import Headings from '../../Shared/Headings';
import ServiceCard from '../../Shared/ServiceCard';
import 'remixicon/fonts/remixicon.css'

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Design",
      icon: "ri-dribbble-line",
      description:
        "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
    },
    {
      id: 2,
      title: "Development",
      icon: "ri-file-text-line",
      description:
        "Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.",
    },
    {
      id: 3,
      title: "Marketing",
      icon: "ri-earth-fill",
      description:
        "A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
    },
    {
      id: 4,
      title: "Support",
      icon: 'tachometer',
      description:
        "Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
    },
  ];

  return (
    <div>
      <Headings
        content='SERVICES'
        description='Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.'
      />
      
      <div className='grid justify-around grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 items-center w-full h-auto min-h-96'>
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;