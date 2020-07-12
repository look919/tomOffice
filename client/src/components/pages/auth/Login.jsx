import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import Logo from '../../../img/logo.png';
import { Link, Redirect } from 'react-router-dom';

import { EmailIcon, PasswordIcon } from '../../layout/Icons';
import LoadingGif from '../../../img/loading.gif';

const Login = ({ login, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    await login(formData);

    await setFormData({
      email: '',
      password: '',
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
            id="LoginPage.header"
            defaultMessage="Zaloguj się"
          />
        </h2>
        <div className="auth__form__field">
          <EmailIcon />
          <FormattedMessage
            id="LoginPage.emailPlaceholder"
            defaultMessage="Email"
          >
            {(msg) => (
              <input
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
            id="LoginPage.passwordPlaceholder"
            defaultMessage="Hasło"
          >
            {(msg) => (
              <input
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
        <div className="auth__form__login">
          <Link
            to="/forgetPassword"
            className="auth__form__login__link auth__form__login__link--password"
          >
            <FormattedMessage
              id="LoginPage.forgotPasswordLink"
              defaultMessage="Zapomniałeś hasła?"
            />
          </Link>
          <Link
            to="/register"
            className="auth__form__login__link auth__form__login__link--new-acc"
          >
            <FormattedMessage
              id="LoginPage.createAccountLink"
              defaultMessage="Stwórz nowe konto"
            />
          </Link>
          <button
            className="btn auth__form__login__btn"
            onClick={(e) => onSubmit(e)}
          >
            {!formData.loading ? (
              <FormattedMessage
                id="LoginPage.button"
                defaultMessage="Zaloguj się"
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
