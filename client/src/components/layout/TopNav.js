import React from 'react';
import { SearchIcon, UserIcon, CartIcon } from './Icons';

import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const TopNav = () => {
  return (
    <nav className='nav__top'>
      <div className='nav__top__item'>
        <input
          className='nav__top__item__input'
          placeholder='Looking for something special?'
        />
        <SearchIcon />
      </div>

      <button className='nav__top__item__btn'>
        <img src={UKFlag} alt='uk flag' className='nav__top__item__btn--uk' />
      </button>
      <button className='nav__top__item__btn  nav__top__item___btn--pl'>
        <img src={PLFlag} alt='uk flag' className='nav__top__item__btn--pl' />
      </button>
      <div className='nav__top__item'>
        <UserIcon />
        <p className='nav__top__item__p'>My account</p>
      </div>
      <div className='nav__top__item'>
        <CartIcon />
        <p className='nav__top__item__p'>Cart</p>
        <div className='nav__top__item__circle'>
          <p className='nav__top__item__circle__p'>13</p>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
