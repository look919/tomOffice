import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import RecommendedOption from './RecommendedOption';
import NewsOption from './NewsOption';
import HitOption from './HitOption';

const RecommendedStuff = () => {
  const [option, setOption] = useState({
    choosen: 'recommended',
  });
  const onChange = (e) => {
    setOption({ ...option, [e.target.name]: e.target.value });
  };

  return (
    <section className="dashboard__recommended">
      <ul className="dashboard__recommended__list">
        <li>
          <button
            className={
              option.choosen === 'recommended'
                ? 'dashboard__recommended__list__item--active dashboard__recommended__list__item'
                : 'dashboard__recommended__list__item'
            }
            name="choosen"
            value={'recommended'}
            onClick={(e) => onChange(e)}
          >
            <FormattedMessage
              id="DashboardPage.Recommended.headers.one"
              defaultMessage="Polecane"
            />
          </button>
        </li>
        <li>
          <button
            className={
              option.choosen === 'news'
                ? 'dashboard__recommended__list__item--active dashboard__recommended__list__item'
                : 'dashboard__recommended__list__item'
            }
            name="choosen"
            value={'news'}
            onClick={(e) => onChange(e)}
          >
            <FormattedMessage
              id="DashboardPage.Recommended.headers.two"
              defaultMessage="Nowe"
            />
          </button>
        </li>
        <li>
          <button
            className={
              option.choosen === 'hit'
                ? 'dashboard__recommended__list__item--active dashboard__recommended__list__item'
                : 'dashboard__recommended__list__item'
            }
            name="choosen"
            value={'hit'}
            onClick={(e) => onChange(e)}
          >
            <FormattedMessage
              id="DashboardPage.Recommended.headers.three"
              defaultMessage="Hit"
            />
          </button>
        </li>
      </ul>
      <div className="dashboard__recommended__content">
        {option.choosen === 'recommended' ? (
          <RecommendedOption />
        ) : option.choosen === 'news' ? (
          <NewsOption />
        ) : (
          <HitOption />
        )}
      </div>
    </section>
  );
};

export default RecommendedStuff;
