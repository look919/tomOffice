import React from 'react';
import Logo from '../../../img/logo.png';
import { Link } from 'react-router-dom';

import { EmailIcon, PasswordIcon } from '../../layout/Icons';

const Login = () => {
  return (
    <section className='container--login'>
      <form className='auth__form'>
        <img src={Logo} alt='logo' className='auth__form__logo' />
        <h2 className='heading-2 auth__form__header'>Log In</h2>
        <div className='auth__form__field' tabIndex='0'>
          <EmailIcon />
          <input className='auth__form__field__input' placeholder='Email' />
        </div>
        <div className='auth__form__field' tabIndex='0'>
          <PasswordIcon />
          <input
            type='password'
            className='auth__form__field__input'
            placeholder='Password'
          />
        </div>
        <div className='auth__form__login'>
          <Link
            to='/'
            className='auth__form__login__link auth__form__login__link--password'
          >
            Forget your password?
          </Link>
          <Link
            to='/'
            className='auth__form__login__link auth__form__login__link--new-acc'
          >
            Create new account
          </Link>
          <button className='btn auth__form__login__btn'>Log in</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
