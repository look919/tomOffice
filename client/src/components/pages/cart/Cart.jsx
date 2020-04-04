import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCartItems } from '../../../actions/products';
import removeItemFromCart from '../../../utils/removeItemFromCart';
import CartSteps from './CartSteps';
import { CartIcon, TruckIconCart, RemoveItemIcon } from '../../layout/Icons';
import { v4 as uuidv4 } from 'uuid';

const Cart = ({ cart, products, getCartItems }) => {
  if (!products) products = [];

  let totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.product.price * item.amount));

  const handleRemoveItemFromCart = (id) => {
    removeItemFromCart(id);
    getCartItems(products);
  };

  return (
    <section className='cartPage'>
      <CartSteps />
      <div className='cartPage__products'>
        <div className='cartPage__products__header'>
          <CartIcon />
          <h4 className='heading-4 cartPage__products__header__text'>
            Twoje produkty
          </h4>
        </div>
        <div className='cartPage__products__content'>
          <span className='cartPage__products__content__header cartPage__products__content__header--first'>
            Przedmiot
          </span>
          <span className='cartPage__products__content__header'>
            Czas dostawy
          </span>
          <span className='cartPage__products__content__header'>Cena</span>
          <span className='cartPage__products__content__header'>Ilość</span>
          <span className='cartPage__products__content__header'>Wartość</span>
          {cart.map((item) => (
            <div key={uuidv4()} className='cartPage__products__content__item'>
              <img
                alt='product view'
                src={require(`../../../img/${item.product.image}`)}
                className='cartPage__products__content__item__img'
              />
              <Link
                to={`/item/${item.product._id}`}
                className='cartPage__products__content__item__name'
              >
                {item.product.name}
              </Link>
              <span className='cartPage__products__content__item__delivery'>
                {item.product.amount > 0
                  ? 'Wysyłka do 5 dni + dostawa'
                  : 'Wysyłka do 5 dni po dostarczeniu do magazynu + dostawa'}
              </span>
              <span className='cartPage__products__content__item__price'>
                {item.product.price.toFixed(2)}
              </span>
              <span className='cartPage__products__content__item__amount'>
                {item.amount}
              </span>
              <span className='cartPage__products__content__item__value'>
                {(item.product.price * item.amount).toFixed(2)}
              </span>
              <button
                className='cartPage__products__content__item__icon'
                onClick={() => handleRemoveItemFromCart(item.product._id)}
              >
                <RemoveItemIcon />
              </button>
            </div>
          ))}
        </div>
        <div className='cartPage__products__delivery'>
          <div className='cartPage__products__header'>
            <TruckIconCart />
            <h4 className='heading-4 cartPage__products__header__text'>
              Sposób dostawy
            </h4>
          </div>
          <span className='cartPage__products__delivery__item'>
            Przesyłka kurierska - darmowa
          </span>
        </div>
      </div>
      <div className='cartPage__cta'>
        <div className='cartPage__cta__discount'>
          <span className='cartPage__cta__discount__text'>Kod promocyjny</span>
          <input
            className='cartPage__cta__discount__input'
            placeholder='Wpisz kod promocyjny'
          />
          <button className='btn cartPage__cta__discount__btn'>Aktywuj</button>
        </div>
        <div className='cartPage__cta__summary'>
          <span className='cartPage__cta__summary__item'>Wartość towarów:</span>
          <span className='cartPage__cta__summary__item'>
            {totalPrice.toFixed(2)}
          </span>
          <span className='cartPage__cta__summary__item'>Rabat:</span>
          <span className='cartPage__cta__summary__item'>-0.00</span>
          <span className='cartPage__cta__summary__item'>Koszt dostawy:</span>
          <span className='cartPage__cta__summary__item'>0.00</span>
          <span className='cartPage__cta__summary__item cartPage__cta__summary__item--bigger'>
            Podsumowanie:
          </span>
          <span className='cartPage__cta__summary__item cartPage__cta__summary__item--bigger'>
            {totalPrice.toFixed(2)}
          </span>
          <button className='btn cartPage__cta__summary__btn'>DALEJ</button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.products.data,
});

export default connect(mapStateToProps, { getCartItems })(Cart);
