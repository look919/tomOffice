import React from 'react';
import { FormattedMessage } from 'react-intl';
import SquareOverview from './SquareOverview';
import Promotion from '../../../img/promo.png';

const Overview = () => {
  return (
    <div className="dashboard__overview">
      <SquareOverview
        svg={'office'}
        text={
          <FormattedMessage
            id="DashboardPage.Overview.squareOne.text"
            defaultMessage="Wyposaż swoje biuro"
          />
        }
        subText={
          <FormattedMessage
            id="DashboardPage.Overview.squareOne.subText"
            defaultMessage="w nowoczesne i tanie meble"
          />
        }
        dir="left"
      />
      <div className="dashboard__overview__center">
        <div className="dashboard__overview__center__heading">
          <div className="dashboard__overview__center__heading__btn">
            <FormattedMessage
              id="DashboardPage.Overview.centerHeaderOne"
              defaultMessage="Wielka okazja"
            />
          </div>
          <h3 className="heading-3 dashboard__overview__center__heading__prdct-name">
            <FormattedMessage
              id="DashboardPage.Overview.centerHeaderTwo"
              defaultMessage="Narożnik ASTI"
            />
          </h3>
        </div>
        <img
          src={Promotion}
          alt="overview"
          className="dashboard__overview__photo"
        />
      </div>

      <SquareOverview
        svg={'truck'}
        text={
          <FormattedMessage
            id="DashboardPage.Overview.squareTwo.text"
            defaultMessage="Darmowa dostawa"
          />
        }
        subText={
          <FormattedMessage
            id="DashboardPage.Overview.squareTwo.subText"
            defaultMessage="na wszystkie produkty"
          />
        }
        dir="right"
      />
    </div>
  );
};

export default Overview;
