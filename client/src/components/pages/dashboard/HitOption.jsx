import React from 'react';
import { Link } from 'react-router-dom';
import selector from '../../../selectors/recProducts';
import { connect } from 'react-redux';
import { CartIconButton } from '../../layout/Icons';
import addItemToCart from '../../../utils/addItemToCart';

const HitOption = ({ products }) => {
  if (!products) products = [];
  let items = selector(products, ['hit']);

  const itemJSON = {
    id: items[0]._id || 'test',
    amount: 1
  };

  const handleButton = () => {
    addItemToCart(itemJSON);
  };

  return (
    <div className='dashboard__recommended__content__hit-option'>
      {items.map(item => (
        <div
          className='dashboard__recommended__content__hit-option__item'
          key={item._id}
        >
          <Link
            className='dashboard__recommended__content__hit-option__item__name'
            to={`/item/${item._id}`}
          >
            {item.name}
          </Link>
          <div className='dashboard__recommended__content__hit-option__item__fulldesc'>
            <span className='dashboard__recommended__content__hit-option__item__desc'>
              Sed magna ex, maximus vitae tempus quis, lacinia a lectus. Nunc
              dui nunc, luctus at condimentum elementum, blandit ut eros. Nulla
              feugiat sem sed eros tincidunt, id placerat mauris cursus. Aliquam
              ipsum sem, viverra at odio eu, fringilla ornare leo. Vivamus non
              tincidunt odio, nec gravida nisi. Aenean lacus ligula, ornare ac
              nunc in, lobortis mattis ipsum. Curabitur ultricies convallis
              dictum.
            </span>
            <div className='dashboard__recommended__content__hit-option__item__cta'>
              <div className='dashboard__recommended__content__hit-option__item__prices'>
                <span className='dashboard__recommended__content__hit-option__item__price'>
                  {item.price}
                </span>
                <span className='dashboard__recommended__content__hit-option__item__oldPrice'>
                  {item.oldPrice + ',-'}
                </span>
              </div>
              <button
                onClick={handleButton}
                className='btn dashboard__recommended__content__hit-option__item__btn'
              >
                <CartIconButton /> ADD TO CART
              </button>
            </div>
          </div>
          <Link
            className='dashboard__recommended__content__hit-option__item__view'
            to={`/item/${item._id}`}
          >
            <img
              src={require(`../../../img/${item.image}`)}
              alt='item view'
              className='dashboard__recommended__content__hit-option__item__view__img'
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, {})(HitOption);
