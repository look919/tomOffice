import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../../../actions/auth';
import Logo from '../../../img/logo.png';
import { Link, Redirect } from 'react-router-dom';

import { EmailIcon, PasswordIcon } from '../../layout/Icons';

const Login = ({ login, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    login(formData);
    setFormData({
      email: '',
      password: '',
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
        <h2 className='heading-2 auth__form__header'>Log In</h2>
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
        <div className='auth__form__login'>
          <Link
            to='/forgetPassword'
            className='auth__form__login__link auth__form__login__link--password'
          >
            Forget your password?
          </Link>
          <Link
            to='/register'
            className='auth__form__login__link auth__form__login__link--new-acc'
          >
            Create new account
          </Link>
          <button
            className='btn auth__form__login__btn'
            onClick={(e) => onSubmit(e)}
          >
            Log in
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
