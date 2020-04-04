import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions/auth';

import Logo from '../../../img/logo.png';

import { EmailIcon, PasswordIcon } from '../../layout/Icons';

const Register = ({ auth, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    register(
      formData.name,
      formData.email,
      formData.password,
      formData.passwordConfirm
    );
    setFormData({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
  };

  if (auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className='container--login'>
      <form className='auth__form'>
        <Link to='/' className='auth__form__logo'>
          <img src={Logo} alt='logo' className='auth__form__logo' />
        </Link>
        <h2 className='heading-2 auth__form__header'>Register</h2>
        <div className='auth__form__field' tabIndex='0'>
          <EmailIcon />
          <input
            className='auth__form__field__input'
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className='auth__form__field' tabIndex='0'>
          <EmailIcon />
          <input
            className='auth__form__field__input'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className='auth__form__field' tabIndex='0'>
          <PasswordIcon />
          <input
            type='password'
            className='auth__form__field__input'
            placeholder='Password'
            name='password'
            value={formData.password}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className='auth__form__field' tabIndex='0'>
          <PasswordIcon />
          <input
            type='password'
            className='auth__form__field__input'
            placeholder='Password confirmation'
            name='passwordConfirm'
            value={formData.passwordConfirm}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
        <div className='auth__form__login'>
          <button
            className='btn auth__form__login__btn--register'
            onClick={(e) => onSubmit(e)}
          >
            Register
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
