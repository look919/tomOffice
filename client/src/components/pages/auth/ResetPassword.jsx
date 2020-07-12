import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../../../actions/auth';

import Logo from '../../../img/logo.png';
import LoadingGif from '../../../img/loading.gif';
import { PasswordIcon } from '../../layout/Icons';

const ResetPassword = ({ resetPassword, ...props }) => {
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
    loading: false,
  });
  const { password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    await setFormData({
      ...formData,
      loading: true,
    });

    await resetPassword(password, passwordConfirm, props.match.params.token);

    await setFormData({
      password: '',
      passwordConfirm: '',
      loading: false,
    });
  };
  return (
    <section className="container--login">
      <form className="auth__form">
        <Link to="/" className="auth__form__logo">
          <img src={Logo} alt="logo" className="auth__form__logo" />
        </Link>
        <h2 className="heading-2 auth__form__header">
          <FormattedMessage
            id="ResetPasswordPage.header"
            defaultMessage="Nowe hasło"
          />
        </h2>
        <div className="auth__form__field">
          <PasswordIcon />
          <FormattedMessage
            id="ResetPasswordPage.passwordPlaceholder"
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
        <div className="auth__form__field">
          <PasswordIcon />
          <FormattedMessage
            id="ResetPasswordPage.passwordConfirmPlaceholder"
            defaultMessage="Powtórz hasło"
          >
            {(msg) => (
              <input
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
        <div className="auth__form__login">
          <Link
            to="/login"
            className="auth__form__login__link auth__form__login__link--password"
          >
            <FormattedMessage
              id="ResetPasswordPage.loginLink"
              defaultMessage="Zaloguj się"
            />
          </Link>
          <Link
            to="/"
            className="auth__form__login__link auth__form__login__link--new-acc"
          >
            <FormattedMessage
              id="ResetPasswordPage.mainPageLink"
              defaultMessage="Strona główna"
            />
          </Link>
          <button
            className="btn auth__form__login__btn"
            onClick={(e) => onSubmit(e)}
          >
            {!formData.loading ? (
              <FormattedMessage
                id="ResetPasswordPage.button"
                defaultMessage="Zmień hasło"
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

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
};

export default connect(null, { resetPassword })(ResetPassword);
