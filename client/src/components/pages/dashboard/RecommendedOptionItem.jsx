import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedOptionItem = props => (
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
    <button className='btn'>Add to cart</button>
  </div>
);

export default RecommendedOptionItem;
