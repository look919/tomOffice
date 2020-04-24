import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserNav from "./UserNav";

export const User = ({ user }) => {
  return (
    <section className="userPage">
      <UserNav />
      <section className="userPage__about">
        <h2 className="userPage__about__header">Dane użytownika</h2>
        <ul className="userPage__about__list">
          <li className="userPage__about__list__item">
            Imię i nazwisko: {user.name}
          </li>
          <li className="userPage__about__list__item">
            Adres email: {user.email}
          </li>
          <li className="userPage__about__list__item">
            Numer telefonu: {user.phone}
          </li>
          {user.address.town ? (
            <div className="userPage__about__list__item__address">
              <span className="userPage__about__list__item__address__text">
                Kraj: {` ${user.address.country}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                Kod pocztowy: {` ${user.address.postCode}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                Miasto: {` ${user.address.town}`}
              </span>
              <span className="userPage__about__list__item__address__text">
                Adres: {` ${user.address.street}`}
              </span>
            </div>
          ) : (
            <div className="userPage__about__list__item__address">
              <span className="userPage__about__list__item__address__text">
                Adres: Brak dodanego adresu
              </span>
              <Link
                to="/settings"
                className="btn userPage__about__list__item__address__link"
              >
                Dodaj adres
              </Link>
            </div>
          )}{" "}
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
