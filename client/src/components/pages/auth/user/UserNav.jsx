import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../../../actions/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserNav = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className='userPage__nav'>
      <div className='userPage__nav__list'>
        <NavLink
          to='/user'
          exact={true}
          className='userPage__nav__list__item'
          activeClassName='userPage__nav__list__item--active'
        >
          <span className='userPage__nav__list__item__link'>O Tobie</span>
        </NavLink>

        <NavLink
          to='/orders'
          className='userPage__nav__list__item'
          activeClassName='userPage__nav__list__item--active'
        >
          <span className='userPage__nav__list__item__link'>Zamówienia</span>
        </NavLink>
        <NavLink
          to='/settings'
          className='userPage__nav__list__item'
          activeClassName='userPage__nav__list__item--active'
        >
          <span className='userPage__nav__list__item__link'>Ustawienia</span>
        </NavLink>
        <button
          className='userPage__nav__list__item userPage__nav__list__item--btn'
          onClick={() => handleLogout()}
        >
          <span className='userPage__nav__list__item__link'>Wyloguj</span>
        </button>
      </div>
    </nav>
  );
};

UserNav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(UserNav);
