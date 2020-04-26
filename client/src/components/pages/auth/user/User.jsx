import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserNav from './UserNav';

export const User = ({ user }) => {
  return (
    <section className="userPage">
      <UserNav />
      <section className="userPage__about">
        <h2 className="userPage__about__header">
          <FormattedMessage
            id="UserPage.User.header"
            defaultMessage="Dane użytkownika"
          />
        </h2>
        <ul className="userPage__about__list">
          <li className="userPage__about__list__item">
            <FormattedMessage
              id="UserPage.User.name"
              defaultMessage="Imię i nazwisko: "
            />{' '}
            {user.name}
          </li>
          <li className="userPage__about__list__item">
            <FormattedMessage
              id="UserPage.User.email"
              defaultMessage="Email: "
            />{' '}
            {user.email}
          </li>
          <li className="userPage__about__list__item">
            <FormattedMessage
              id="UserPage.User.phone"
              defaultMessage="Telefon: "
            />{' '}
            {user.phone}
          </li>
          {user.address.town ? (
            <div className="userPage__about__list__item__address">
              <span className="userPage__about__list__item__address__text">
                <FormattedMessage
                  id="UserPage.User.country"
                  defaultMessage="Kraj: "
                />{' '}
                {` ${user.address.country}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                <FormattedMessage
                  id="UserPage.User.postCode"
                  defaultMessage="Kod pocztowy: "
                />{' '}
                {` ${user.address.postCode}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                <FormattedMessage
                  id="UserPage.User.town"
                  defaultMessage="Miasto: "
                />{' '}
                {` ${user.address.town}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                <FormattedMessage
                  id="UserPage.User.address"
                  defaultMessage="Adres: "
                />{' '}
                {` ${user.address.street}`}
              </span>
            </div>
          ) : (
            <div className="userPage__about__list__item__address">
              <span className="userPage__about__list__item__address__text">
                <FormattedMessage
                  id="UserPage.User.noAddress"
                  defaultMessage="Adres: Brak dodanego adresu"
                />
              </span>
              <Link
                to="/settings"
                className="btn userPage__about__list__item__address__link"
              >
                <FormattedMessage
                  id="UserPage.User.noAddressButton"
                  defaultMessage="Dodaj adres"
                />
              </Link>
            </div>
          )}{' '}
        </ul>
      </section>
    </section>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(User);
