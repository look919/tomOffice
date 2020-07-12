import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';

import Logo from '../../../img/logo.png';
import LoadingGif from '../../../img/loading.gif';

import {
  UserRegisterIcon,
  EmailIcon,
  PasswordIcon,
  PhoneRegisterIcon,
} from '../../layout/Icons';

const Register = ({ auth, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
    loading: false,
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    await setFormData({
      ...formData,
      loading: true,
    });

    await register(
      formData.name,
      formData.email,
      formData.password,
      formData.passwordConfirm,
      formData.phone
    );
    await setFormData({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      loading: false,
    });
  };

  if (auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className="container--login">
      <form className="auth__form">
        <Link to="/" className="auth__form__logo">
          <img src={Logo} alt="logo" className="auth__form__logo" />
        </Link>
        <h2 className="heading-2 auth__form__header">
          <FormattedMessage
            id="RegisterPage.header"
            defaultMessage="Rejestracja"
          />
        </h2>
        <div className="auth__form__field">
          <UserRegisterIcon />
          <FormattedMessage
            id="RegisterPage.namePlaceholder"
            defaultMessage="Imię i nazwisko"
          >
            {(msg) => (
              <input
                required
                className="auth__form__field__input"
                placeholder={msg}
                name="name"
                value={formData.name}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          </FormattedMessage>
        </div>
        <div className="auth__form__field">
          <EmailIcon />
          <FormattedMessage
            id="RegisterPage.emailPlaceholder"
            defaultMessage="Email"
          >
            {(msg) => (
              <input
                required
                type="email"
                className="auth__form__field__input"
                placeholder={msg}
                name="email"
                value={formData.email}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          </FormattedMessage>
        </div>
        <div className="auth__form__field">
          <PasswordIcon />
          <FormattedMessage
            id="RegisterPage.passwordPlaceholder"
            defaultMessage="Hasło"
          >
            {(msg) => (
              <input
                required
                type="password"
                className="auth__form__field__input"
                placeholder={msg}
                name="password"
                value={formData.password}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          </FormattedMessage>
        </div>
        <div className="auth__form__field">
          <PasswordIcon />
          <FormattedMessage
            id="RegisterPage.passwordConfirmPlaceholder"
            defaultMessage="Powtórz hasło"
          >
            {(msg) => (
              <input
                required
                type="password"
                className="auth__form__field__input"
                placeholder={msg}
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          </FormattedMessage>
        </div>
        <div className="auth__form__field">
          <PhoneRegisterIcon />
          <FormattedMessage
            id="RegisterPage.phonePlaceholder"
            defaultMessage="Telefon"
          >
            {(msg) => (
              <input
                type="tel"
                required
                className="auth__form__field__input"
                placeholder={msg}
                name="phone"
                value={formData.phone}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            )}
          </FormattedMessage>
        </div>
        <div className="auth__form__login">
          <button
            className="btn auth__form__login__btn--register"
            onClick={(e) => onSubmit(e)}
          >
            {!formData.loading ? (
              <FormattedMessage
                id="RegisterPage.button"
                defaultMessage="Rejestracja"
              />
            ) : (
              <img
                src={LoadingGif}
                alt="loading..."
                className="auth__form__gif"
              />
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
