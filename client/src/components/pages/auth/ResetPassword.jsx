import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resetPassword } from '../../../actions/auth';

import Logo from '../../../img/logo.png';
import { PasswordIcon } from '../../layout/Icons';

const ResetPassword = ({ resetPassword, ...props }) => {
  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
  });
  const { password, passwordConfirm } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    resetPassword(password, passwordConfirm, props.match.params.token);

    setFormData({
      password: '',
      passwordConfirm: '',
    });
  };
  return (
    <section className="container--login">
      <form className="auth__form">
        <Link to="/" className="auth__form__logo">
          <img src={Logo} alt="logo" className="auth__form__logo" />
        </Link>
        <h2 className="heading-2 auth__form__header">New password</h2>
        <div className="auth__form__field">
          <PasswordIcon />
          <input
            type="password"
            className="auth__form__field__input"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className="auth__form__field">
          <PasswordIcon />
          <input
            type="password"
            className="auth__form__field__input"
            placeholder="Password Confirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className="auth__form__login">
          <Link
            to="/login"
            className="auth__form__login__link auth__form__login__link--password"
          >
            Log in
          </Link>
          <Link
            to="/"
            className="auth__form__login__link auth__form__login__link--new-acc"
          >
            Main page
          </Link>
          <button
            className="btn auth__form__login__btn"
            onClick={(e) => onSubmit(e)}
          >
            Change password
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
