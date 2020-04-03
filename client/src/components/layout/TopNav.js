import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchIcon, UserIcon, CartIcon } from './Icons';
import getItemsFromCart from '../../utils/getItemsFromCart';

import UKFlag from '../../img/uk.png';
import PLFlag from '../../img/pl.png';

const TopNav = ({ products }) => {
  //Products
  if (!products) products = [];
  const [cartProducts, setCartProducts] = useState([]);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(cart.length, cartProducts.length);

  useEffect(() => {
    if (cart.length > cartProducts.length) {
      setCartProducts(getItemsFromCart(products));
    }
  });

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
        <p className='nav__top__item__p'>Moje konto</p>
      </div>
      <div className='nav__top__item'>
        <CartIcon />
        <p className='nav__top__item__p'>Koszyk</p>
        <div className='nav__top__item__circle'>
          <p className='nav__top__item__circle__p'>{cartProducts.length}</p>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, {})(TopNav);
