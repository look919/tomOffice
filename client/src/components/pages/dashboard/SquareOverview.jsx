import React from 'react';
import { TruckIcon, OfficeIcon } from '../../layout/Icons';

const SquareOverview = props => {
  return (
    <div className={`dashboard__overview__square__external--${props.dir}`}>
      <div className='dashboard__overview__square__inner'>
        {props.svg === 'office' ? <OfficeIcon /> : <TruckIcon />}
        <h2 className='heading-2 dashboard__overview__square__inner__heading'>
          {props.text}
        </h2>
        <h4 className='heading-4 dashboard__overview__square__inner__subheading'>
          {props.subText}
        </h4>
      </div>
    </div>
  );
};

export default SquareOverview;
