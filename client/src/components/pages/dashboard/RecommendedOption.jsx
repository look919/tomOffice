import React from 'react';
import RecommendedOptionItem from './RecommendedOptionItem';

import OfficeCabinete from '../../../img/rec-officecabinet.jpg';
import Sofa from '../../../img/rec-sofa.jpg';
import Desk from '../../../img/rec-desk.jpg';
import Chair from '../../../img/rec-chair.jpg';
import Lighting from '../../../img/rec-lighting.jpg';

const RecommendedOption = () => {
  return (
    <div className='dashboard__recommended__content__rec-option'>
      <RecommendedOptionItem
        img={OfficeCabinete}
        name={'Biblioteczka LAFABRICA OFFICE LB4770K71704'}
        price={'1183,20'}
        oldPrice={'1420,-'}
      />
      <RecommendedOptionItem
        img={Sofa}
        name={'Sofa GALA 3-osobowa, rozkładana'}
        price={'1439,20'}
        oldPrice={'1799,-'}
      />
      <RecommendedOptionItem
        img={Chair}
        name={'Fotel biurowy GUBI HC.313'}
        price={'495,20'}
        oldPrice={'619,-'}
      />
      <RecommendedOptionItem
        img={Desk}
        name={'Biurko HEY HEYB211-C230'}
        price={'471,20'}
        oldPrice={'589,-'}
      />

      <RecommendedOptionItem
        img={Lighting}
        name={'Lampa wisząca PICO 3'}
        price={'479,20'}
        oldPrice={'599,-'}
      />
    </div>
  );
};

export default RecommendedOption;
