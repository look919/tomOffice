import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { forgotPassword } from '../../../actions/auth';

import Logo from '../../../img/logo.png';
import { EmailIcon } from '../../layout/Icons';

const ForgetPassword = ({ auth, forgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    forgotPassword(email);
    setFormData({
      email: '',
    });
  };
  if (auth) {
    return <Redirect to="/user" />;
  }

  return (
    <section className="container--login">
      <form className="auth__form">
        <Link to="/" className="auth__form__logo">
          <img src={Logo} alt="logo" className="auth__form__logo" />
        </Link>
        <h2 className="heading-2 auth__form__header">
          <FormattedMessage
            id="ForgotPasswordPage.header"
            defaultMessage="Zresetuj hasło"
          />
        </h2>
        <div className="auth__form__field">
          <EmailIcon />
          <FormattedMessage
            id="ForgotPasswordPage.emailPlaceholder"
            defaultMessage="Email"
          >
            {(msg) => (
              <input
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
        <div className="auth__form__login">
          <Link
            to="/login"
            className="auth__form__login__link auth__form__login__link--password"
          >
            <FormattedMessage
              id="ForgotPasswordPage.loginLink"
              defaultMessage="Zaloguj się"
            />
          </Link>
          <Link
            to="/"
            className="auth__form__login__link auth__form__login__link--new-acc"
          >
            <FormattedMessage
              id="ForgotPasswordPage.mainPageLink"
              defaultMessage="Strona główna"
            />
          </Link>
          <button
            className="btn auth__form__login__btn"
            onClick={(e) => onSubmit(e)}
          >
            <FormattedMessage
              id="ForgotPasswordPage.button"
              defaultMessage="Resetuj"
            />
          </button>
        </div>
      </form>
    </section>
  );
};

ForgetPassword.propTypes = {
  auth: PropTypes.bool,
  forgotPassword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { forgotPassword })(ForgetPassword);
