import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { Context } from '../../Wrapper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchIcon, UserIcon, CartIcon } from './Icons';
import filter from '../../selectors/navSearch';

import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const TopNav = ({ auth, products, cart }) => {
  //context language
  const context = useContext(Context);

  //Products
  if (!products) products = [];
  const [search, setSearch] = useState({
    text: '',
  });

  //search navbar
  const searchedItems = filter(products, search.text) || [];
  const onChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  return (
    <nav className="nav__top">
      <div className="nav__top__item nav__top__item__search">
        <FormattedMessage
          id="TopNav.searchInputPlaceholder"
          defaultMessage="Szukasz czegoś konkretnego?"
        >
          {(msg) => (
            <input
              placeholder={msg}
              className="nav__top__item__input"
              name="text"
              onChange={(e) => onChange(e)}
              autoComplete="off"
              value={search.text}
            />
          )}
        </FormattedMessage>
        <SearchIcon />
        {searchedItems.length > 0 ? (
          <div className="nav__top__item__search__items">
            {searchedItems.map((item) => (
              <Link
                to={`/item/${item._id}`}
                className="nav__top__item__search__item"
                key={item._id}
              >
                <img
                  src={require(`../../img/${item.image}`)}
                  className="nav__top__item__search__item__img"
                  alt="item view"
                />
                <p className="nav__top__item__search__item__text">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        ) : search.text.length >= 3 ? (
          <div className="nav__top__item__search__items">
            <FormattedMessage
              id="TopNav.searchInputInfoOne"
              defaultMessage="Brak przedmiotów o takiej nazwie"
            />
          </div>
        ) : (
          <div className="nav__top__item__search__items">
            <FormattedMessage
              id="TopNav.searchInputInfoTwo"
              defaultMessage="Wprowadź conajmniej 3 litery"
            />
          </div>
        )}
      </div>

      <button className="nav__top__item__btn" onClick={context.selectEn}>
        <img
          src={UKFlag}
          alt="uk flag"
          value={'en'}
          className="nav__top__item__btn--uk"
        />
      </button>
      <button
        className="nav__top__item__btn  nav__top__item___btn--pl"
        onClick={context.selectPl}
      >
        <img src={PLFlag} alt="uk flag" className="nav__top__item__btn--pl" />
      </button>
      {auth ? (
        <Link to="/user" className="nav__top__item">
          <UserIcon />
          <p className="nav__top__item__p">
            <FormattedMessage
              id="TopNav.myAccount"
              defaultMessage="Moje konto"
            />
          </p>
        </Link>
      ) : (
        <Link to="/login" className="nav__top__item">
          <UserIcon />
          <p className="nav__top__item__p">
            <FormattedMessage
              id="TopNav.myAccount"
              defaultMessage="Moje konto"
            />
          </p>
        </Link>
      )}
      <Link to="/cart" className="nav__top__item">
        <CartIcon />
        <p className="nav__top__item__p">
          <FormattedMessage id="TopNav.cart" defaultMessage="Koszyk" />
        </p>
        <div className="nav__top__item__circle">
          <p className="nav__top__item__circle__p">
            {cart.reduce((currentTotal, item) => {
              return item.amount + currentTotal;
            }, 0)}
          </p>
        </div>
      </Link>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
  cart: state.cart,
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(TopNav);
