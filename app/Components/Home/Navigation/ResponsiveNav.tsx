import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

interface Props {
  openNav: () => void;
  closeNav: () => void;
}

const ResponsiveNav: React.FC<Props> = ({ openNav, closeNav }) => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav nav={nav} closeNav={closeNav} />
    </div>
  );
};

export default ResponsiveNav;
