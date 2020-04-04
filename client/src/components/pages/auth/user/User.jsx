import React from 'react';

export const User = () => {
  return (
    <section className='userPage'>
      <nav className='userPage__nav'>
        <ul className='userPage__nav__list'>
          <li className='userPage__nav__list__item'>O Tobie</li>
          <li className='userPage__nav__list__item'>Zamówienia</li>
          <li className='userPage__nav__list__item'>Zwroty</li>
          <li className='userPage__nav__list__item'>Ustawienia</li>
          <li className='userPage__nav__list__item'>Wyloguj</li>
        </ul>
      </nav>
      <section className='userPage__content'>
        Content not created just yet
      </section>
    </section>
  );
};

export default User;
