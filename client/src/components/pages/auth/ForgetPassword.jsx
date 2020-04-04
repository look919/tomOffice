import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import {forgetPassword} from '../../../actions/auth';

import Logo from '../../../img/logo.png';
import { EmailIcon } from '../../layout/Icons';

const ForgetPassword = ({ auth }) => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    //forgetPassword(formData);
    setFormData({
      email: '',
    });
  };
  if (auth) {
    return <Redirect to='/user' />;
  }

  return (
    <section className='container--login'>
      <form className='auth__form'>
        <Link to='/' className='auth__form__logo'>
          <img src={Logo} alt='logo' className='auth__form__logo' />
        </Link>
        <h2 className='heading-2 auth__form__header'>Password Reset</h2>
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
        <div className='auth__form__login'>
          <Link
            to='/login'
            className='auth__form__login__link auth__form__login__link--password'
          >
            Log in
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

ForgetPassword.propTypes = {
  //login: PropTypes.func.isRequired,
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(ForgetPassword);
