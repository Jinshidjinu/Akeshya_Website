import React from 'react'
import Headings from '../../Shared/Headings'
import FeatureCard from '../../Shared/FeatureCard'
import 'remixicon/fonts/remixicon.css'

const features = [
  { id: 1, title: 'Web design', icon: 'ri-window-line', color: '#ffbb2c' },
  { id: 2, title: 'Development', icon: 'ri-code-box-line', color: '#5578ff' },
  { id: 3, title: 'Branding', icon: 'ri-creative-commons-by-line', color: '#e80368' },
  { id: 4, title: 'Media buying', icon: 'ri-play-circle-line', color: '#e361ff' },
  { id: 5, title: 'Search engine', icon: 'ri-search-eye-line', color: '#47aeff' },
  { id: 6, title: 'Brand strategy', icon: 'ri-todo-line', color: '#ffa76e' },
  { id: 7, title: 'Local search marketing', icon: 'ri-map-pin-line', color: '#dbce11' },
  { id: 8, title: 'Lead Tracking & Management', icon: 'ri-bar-chart-grouped-line', color: '#4233ff' },
  { id: 9, title: 'Contact management', icon: 'ri-contacts-book-line', color: '#b2904f' },
  { id: 10, title: 'Media management', icon: 'ri-disc-line', color: '#b20969' },
  { id: 11, title: 'Social scheduling', icon: 'ri-calendar-event-line', color: '#ff5828' },
  { id: 12, title: 'Ad retargeting', icon: 'ri-advertisement-fill', color: '#29cc61' },
];

const Features: React.FC = () => {
  return (
    <div>
      <Headings
        content='OUR CORE FEATURES'
        description='Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.'
      />
        <div className='w-full mx-auto px-24 grid gap-5 grid-flow-row auto-rows-max grid-cols-1 lg:grid-cols-4 h-auto'>
          {features.map((data) => (
            <FeatureCard
              key={data.id}
              title={data.title}
              icon={data.icon} 
              color={data.color}
            />
          ))}
        </div>
      
    </div>
  )
}

export default Features
