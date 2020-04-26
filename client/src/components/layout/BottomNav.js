import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="nav__bottom">
      <ul className="nav__bottom__list">
        <li className="nav__bottom__list__item">
          <NavLink to="/" activeClassName="isActive" exact={true}>
            Main page
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/officeCabinet" activeClassName="isActive">
            Szafy
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/sofa" activeClassName="isActive">
            Sofy
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/desk" activeClassName="isActive">
            Biurka
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/chair" activeClassName="isActive">
            Krzesła
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/lighting" activeClassName="isActive">
            Oświetlenie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
