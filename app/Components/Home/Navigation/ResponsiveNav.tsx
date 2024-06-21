import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

interface Props {
  openNav: () => void;
  closeNav: () => void;
}

const ResponsiveNav: React.FC<Props> = ({ openNav, closeNav }) => {
  const [nav, setNav] = useState(false);

  const handleOpenNav = () => {
    setNav(true);
    openNav();
  };

  const handleCloseNav = () => {
    setNav(false);
    closeNav();
  };

  return (
    <div>
      <Nav openNav={handleOpenNav} />
      <MobileNav nav={nav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
