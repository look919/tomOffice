import React from 'react';
import { Link } from 'react-router-dom';

const RecommendedOptionItem = props => {
  return (
    <Link to='/' className='dashboard__recommended__content__rec-option__item'>
      <img src={props.img} alt='furniture view' />
      <span className='dashboard__recommended__content__rec-option__item__name'>
        {props.name}
      </span>
      <span className='dashboard__recommended__content__rec-option__item__price'>
        {props.price}
      </span>
      <span className='dashboard__recommended__content__rec-option__item__oldPrice'>
        {props.oldPrice}
      </span>
      <button className='btn'>Add to cart</button>
    </Link>
  );
};

export default RecommendedOptionItem;
