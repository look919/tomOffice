import React from 'react';
import { Link } from 'react-router-dom';

const NewsOptionItem = props => {
  return (
    <Link className='dashboard__recommended__content__news-option__item' to='/'>
      <span className='dashboard__recommended__content__news-option__item__name'>
        {props.name}
      </span>
      <span className='dashboard__recommended__content__news-option__item__desc'>
        {props.desc}
      </span>
      <img
        src={props.img}
        alt='item view'
        className='dashboard__recommended__content__news-option__item__img'
      />
      <div className='dashboard__recommended__content__news-option__item__prices'>
        <span className='dashboard__recommended__content__news-option__item__price'>
          {props.price}
        </span>
        <span className='dashboard__recommended__content__news-option__item__oldPrice'>
          {props.oldPrice}
        </span>
      </div>
      <button className='btn dashboard__recommended__content__news-option__item__btn'>
        ADD TO CART
      </button>
    </Link>
  );
};
export default NewsOptionItem;
