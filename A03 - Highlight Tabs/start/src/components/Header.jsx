import React from 'react';
import Tab from './Tab'

const Header = () => {
  return (
    <div className="tabs">
      <Tab name="Home" />
      <Tab name="About" />
      <Tab name="Features" />
    </div>
  );
}

export default Header;
