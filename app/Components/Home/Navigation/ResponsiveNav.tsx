import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';



const ResponsiveNav: React.FC = () => {
  const [nav, setNav] = useState(false);
  const handleOpenNav = () => {
    setNav(true);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  return (
    <div>
      <Nav openNav={handleOpenNav} />
      <MobileNav nav={nav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
