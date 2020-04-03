import React from 'react';
import { Link } from 'react-router-dom';
import { CartIconButton } from '../../layout/Icons';
import addItemToCart from '../../../utils/addItemToCart';

const RecommendedOptionItem = props => {
  const item = {
    id: props.id,
    amount: 1
  };

  const handleButton = () => {
    addItemToCart(item);
  };

  return (
    <div className='dashboard__recommended__content__rec-option__item'>
      <Link to={props.link}>
        <img
          src={require(`../../../img/${props.img}`)}
          alt='furniture view'
          className='dashboard__recommended__content__rec-option__item__img'
        />
      </Link>

      <Link
        className='dashboard__recommended__content__rec-option__item__name'
        to={props.link}
      >
        {props.name}
      </Link>
      <span className='dashboard__recommended__content__rec-option__item__price'>
        {props.price.toFixed(2)}
      </span>
      <span className='dashboard__recommended__content__rec-option__item__oldPrice'>
        {props.oldPrice.toFixed(2)}
      </span>
      <button className='btn' onClick={handleButton}>
        <CartIconButton /> Dodaj do koszyka
      </button>
    </div>
  );
};

export default RecommendedOptionItem;
