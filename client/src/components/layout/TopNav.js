import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { SearchIcon, UserIcon, CartIcon } from './Icons';
import filter from '../../selectors/navSearch';

import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const TopNav = ({ auth, products, cart }) => {
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
    <nav className='nav__top'>
      <div className='nav__top__item nav__top__item__search'>
        <input
          className='nav__top__item__input'
          placeholder='Looking for something special?'
          value={search.text}
          name='text'
          onChange={(e) => onChange(e)}
          autoComplete='off'
        />
        <SearchIcon />
        {searchedItems.length > 0 ? (
          <div className='nav__top__item__search__items'>
            {searchedItems.map((item) => (
              <Link
                to={`/item/${item._id}`}
                className='nav__top__item__search__item'
                key={item._id}
              >
                <img
                  src={require(`../../img/${item.image}`)}
                  className='nav__top__item__search__item__img'
                  alt='item view'
                />
                <p className='nav__top__item__search__item__text'>
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className='nav__top__item__search__items'>
            Brak przedmiotów z podaną nazwą
          </div>
        )}
      </div>

      <button className='nav__top__item__btn'>
        <img src={UKFlag} alt='uk flag' className='nav__top__item__btn--uk' />
      </button>
      <button className='nav__top__item__btn  nav__top__item___btn--pl'>
        <img src={PLFlag} alt='uk flag' className='nav__top__item__btn--pl' />
      </button>
      {auth ? (
        <Link to='/user' className='nav__top__item'>
          <UserIcon />
          <p className='nav__top__item__p'>Moje konto</p>
        </Link>
      ) : (
        <Link to='/login' className='nav__top__item'>
          <UserIcon />
          <p className='nav__top__item__p'>Moje konto</p>
        </Link>
      )}
      <Link to='/cart' className='nav__top__item'>
        <CartIcon />
        <p className='nav__top__item__p'>Koszyk</p>
        <div className='nav__top__item__circle'>
          <p className='nav__top__item__circle__p'>{cart.length || 0}</p>
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
