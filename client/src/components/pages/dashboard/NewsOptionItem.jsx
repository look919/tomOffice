import React from 'react';
import { Link } from 'react-router-dom';
import { CartIconButton } from '../../layout/Icons';
import addItemToCart from '../../../utils/addItemToCart';

const NewsOptionItem = props => {
  const item = {
    id: props.id,
    amount: 1
  };

  const handleButton = () => {
    addItemToCart(item);
  };

  return (
    <div className='dashboard__recommended__content__news-option__item'>
      <Link
        to={props.link}
        className='dashboard__recommended__content__news-option__item__name'
      >
        {props.name}
      </Link>
      <span className='dashboard__recommended__content__news-option__item__desc'>
        {props.desc}
      </span>
      <Link
        to={props.link}
        className='dashboard__recommended__content__news-option__item__view'
      >
        <img
          src={require(`../../../img/${props.img}`)}
          alt='item view'
          className='dashboard__recommended__content__news-option__item__view__img'
        />
      </Link>

      <div className='dashboard__recommended__content__news-option__item__prices'>
        <span className='dashboard__recommended__content__news-option__item__price'>
          {props.price}
        </span>
        <span className='dashboard__recommended__content__news-option__item__oldPrice'>
          {props.oldPrice}
        </span>
      </div>
      <button
        onClick={handleButton}
        className='btn dashboard__recommended__content__news-option__item__btn'
      >
        <CartIconButton /> ADD TO CART
      </button>
    </div>
  );
};

export default NewsOptionItem;
