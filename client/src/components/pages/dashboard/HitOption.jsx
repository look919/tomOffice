import React from 'react';
import { Link } from 'react-router-dom';

import HitSofa from '../../../img/hit-sofa.jpg';

const HitOption = () => {
  return (
    <div className='dashboard__recommended__content__hit-option'>
      <Link
        to='/'
        className='dashboard__recommended__content__hit-option__item'
      >
        <span className='dashboard__recommended__content__hit-option__item__name'>
          Sofa LORENA 3 osobowa rozkładana
        </span>
        <div className='dashboard__recommended__content__hit-option__item__fulldesc'>
          <span className='dashboard__recommended__content__hit-option__item__desc'>
            Sed magna ex, maximus vitae tempus quis, lacinia a lectus. Nunc dui
            nunc, luctus at condimentum elementum, blandit ut eros. Nulla
            feugiat sem sed eros tincidunt, id placerat mauris cursus. Aliquam
            ipsum sem, viverra at odio eu, fringilla ornare leo. Vivamus non
            tincidunt odio, nec gravida nisi. Aenean lacus ligula, ornare ac
            nunc in, lobortis mattis ipsum. Curabitur ultricies convallis
            dictum.
          </span>
          <div className='dashboard__recommended__content__hit-option__item__cta'>
            <div className='dashboard__recommended__content__hit-option__item__prices'>
              <span className='dashboard__recommended__content__hit-option__item__price'>
                847,20
              </span>
              <span className='dashboard__recommended__content__hit-option__item__oldPrice'>
                1059,-
              </span>
            </div>
            <button className='btn dashboard__recommended__content__hit-option__item__btn'>
              ADD TO CART
            </button>
          </div>
        </div>

        <img
          src={HitSofa}
          alt='item view'
          className='dashboard__recommended__content__hit-option__item__img'
        />
      </Link>
    </div>
  );
};

export default HitOption;
