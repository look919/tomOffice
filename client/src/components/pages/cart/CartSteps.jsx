import React from 'react';

const CartSteps = () => {
  return (
    <div className='cartPage__steps'>
      <div className='cartPage__steps__step'>
        <div className='cartPage__steps__circle cartPage__steps__circle--active'>
          <span className='cartPage__steps__circle__text cartPage__steps__circle__text--active'>
            1
          </span>
        </div>
        <h4 className='heading-4 cartPage__steps__header cartPage__steps__header--active'>
          Koszyk
        </h4>
      </div>
      <span className='cartPage__steps__line'>&nbsp;</span>

      <div className='cartPage__steps__step'>
        <div className='cartPage__steps__circle'>
          <span className='cartPage__steps__circle__text'>2</span>
        </div>
        <h4 className='heading-4 cartPage__steps__header'>Płatność</h4>
      </div>
      <span className='cartPage__steps__line'>&nbsp;</span>

      <div className='cartPage__steps__step'>
        <div className='cartPage__steps__circle'>
          <span className='cartPage__steps__circle__text'>3</span>
        </div>
        <h4 className='heading-4 cartPage__steps__header'>Podsumowanie</h4>
      </div>
    </div>
  );
};

export default CartSteps;
