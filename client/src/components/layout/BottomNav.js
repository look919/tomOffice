import React from 'react';
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className='nav__bottom'>
      <ul className='nav__bottom__list'>
        <li className='nav__bottom__list__item'>
          <Link to='/'>Main page</Link>
        </li>
        <li className='nav__bottom__list__item'>
          <Link to='/officeCabinet'>Szafy</Link>
        </li>
        <li className='nav__bottom__list__item'>
          <Link to='/sofa'>Sofy</Link>
        </li>
        <li className='nav__bottom__list__item'>
          <Link to='/desk'>Biurka</Link>
        </li>
        <li className='nav__bottom__list__item'>
          <Link to='/chair'>Krzesła</Link>
        </li>
        <li className='nav__bottom__list__item'>
          <Link to='/lighting'>Oświetlenie</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
