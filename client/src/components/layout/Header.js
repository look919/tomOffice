import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import TopNav from './TopNav';

import BottomNav from './BottomNav';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={Logo} alt='logo' className='header__logo' />
      </Link>
      <TopNav />

      <BottomNav />
    </header>
  );
};

export default Header;
