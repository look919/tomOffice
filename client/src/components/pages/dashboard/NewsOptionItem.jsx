import React from 'react';
import { Link } from 'react-router-dom';

const NewsOptionItem = props => (
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
    <button className='btn dashboard__recommended__content__news-option__item__btn'>
      ADD TO CART
    </button>
  </div>
);

export default NewsOptionItem;
