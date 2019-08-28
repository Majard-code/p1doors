import React from 'react';
import './header.css';
import Logo from './logo/logo';
import Menu from './menu/menu';
import Phone from './phone/phone';


const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <Phone />
    </header>
  );
}

export default Header;
