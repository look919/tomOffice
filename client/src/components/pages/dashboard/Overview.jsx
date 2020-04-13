import React from 'react';
import SquareOverview from './SquareOverview';
import Promotion from '../../../img/promo.png';

const Overview = () => {
  return (
    <div className='dashboard__overview'>
      <SquareOverview
        svg={'office'}
        text={'Wyposaż swoje biuro!'}
        subText={'w nowoczesne i tanie meble'}
        dir='left'
      />
      <div className='dashboard__overview__center'>
        <div className='dashboard__overview__center__heading'>
          <div className='dashboard__overview__center__heading__btn'>
            Wielka okazja!
          </div>
          <h3 className='heading-3 dashboard__overview__center__heading__prdct-name'>
            Narożnik ASTI
          </h3>
        </div>
        <img
          src={Promotion}
          alt='overview'
          className='dashboard__overview__photo'
        />
      </div>

      <SquareOverview
        svg={'truck'}
        text={'Darmowa dostawa!'}
        subText={'na wszystkie produkty'}
        dir='right'
      />
    </div>
  );
};

export default Overview;
