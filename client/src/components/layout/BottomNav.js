import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="nav__bottom">
      <ul className="nav__bottom__list">
        <li className="nav__bottom__list__item">
          <NavLink to="/" activeClassName="isActive" exact={true}>
            <FormattedMessage
              id="BottomNav.mainPage"
              defaultMessage="Strona główna"
            />
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/officeCabinet" activeClassName="isActive">
            <FormattedMessage
              id="BottomNav.officeCabinets"
              defaultMessage="Szafy"
            />
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/sofa" activeClassName="isActive">
            <FormattedMessage id="BottomNav.sofas" defaultMessage="Sofy" />
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/desk" activeClassName="isActive">
            <FormattedMessage id="BottomNav.desks" defaultMessage="Biurka" />
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/chair" activeClassName="isActive">
            <FormattedMessage id="BottomNav.chairs" defaultMessage="Krzesła" />
          </NavLink>
        </li>
        <li className="nav__bottom__list__item">
          <NavLink to="/products/lighting" activeClassName="isActive">
            <FormattedMessage
              id="BottomNav.lighting"
              defaultMessage="Oświetlenie"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNav;
