import React from 'react';

import Logo from '../../img/logo.png';
import TopNav from './TopNav';

import BottomNav from './BottomNav';

const Header = () => {
  return (
    <header className='header'>
      <img src={Logo} alt='logo' className='header__logo' />
      <TopNav />

      <BottomNav />
    </header>
  );
};

export default Header;
