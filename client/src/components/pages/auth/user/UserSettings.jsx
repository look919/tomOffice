import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import UserNav from './UserNav';
import { updateUser } from '../../../../actions/auth';
import {
  UserRegisterIcon,
  PhoneRegisterIcon,
  CountryRegisterIcon,
  TownRegisterIcon,
  AddressRegisterIcon,
  PostCodeRegisterIcon,
} from '../../../layout/Icons';

const UserSettings = ({ user, updateUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,

    country: user.address.country,
    town: user.address.town,
    postCode: user.address.postCode,
    street: user.address.street,
  });
  const { name, email, phone } = formData;
  const address = {
    country: formData.country,
    town: formData.town,
    postCode: formData.postCode,
    street: formData.street,
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    updateUser(name, email, phone, address);
  };

  return (
    <section className='userPage'>
      <UserNav />
      <form className='userPage__settings'>
        <h2 className='userPage__settings__header'>Ustawienia</h2>
        <div className='userPage__settings__list'>
          <div className='userPage__settings__input-container'>
            <UserRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Imię i nazwisko:
            </span>
            <input
              className='userPage__settings__input-container__input'
              name='name'
              value={formData.name}
              onChange={(e) => onChange(e)}
              placeholder={user.name}
            />
          </div>
          <div className='userPage__settings__input-container'>
            <PhoneRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Numer telefonu:
            </span>
            <input
              className='userPage__settings__input-container__input'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={(e) => onChange(e)}
              placeholder={user.phone}
            />
          </div>
          <div className='userPage__settings__input-container'>
            <CountryRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Kraj:
            </span>
            <input
              className='userPage__settings__input-container__input'
              name='country'
              value={formData.country}
              onChange={(e) => onChange(e)}
              placeholder={user.address.country}
            />
          </div>
          <div className='userPage__settings__input-container'>
            <TownRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Miasto:
            </span>
            <input
              className='userPage__settings__input-container__input'
              name='town'
              value={formData.town}
              onChange={(e) => onChange(e)}
              placeholder={user.address.town}
            />
          </div>
          <div className='userPage__settings__input-container'>
            <PostCodeRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Kod pocztowy:
            </span>
            <input
              className='userPage__settings__input-container__input'
              name='postCode'
              value={formData.postCode}
              onChange={(e) => onChange(e)}
              placeholder={user.address.postCode}
            />
          </div>
          <div className='userPage__settings__input-container'>
            <AddressRegisterIcon />
            <span className='userPage__settings__input-container__text'>
              Adres:
            </span>
            <input
              className='userPage__settings__input-container__input'
              name='street'
              value={formData.street}
              onChange={(e) => onChange(e)}
              placeholder={user.address.street}
            />
          </div>
          <button
            className='btn userPage__settings__btn'
            onClick={(e) => onSubmit(e)}
          >
            Aktualizuj
          </button>
        </div>
      </form>
    </section>
  );
};

UserSettings.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { updateUser })(UserSettings);
