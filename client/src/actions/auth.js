import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from './../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/users/auth');
    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data.user,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: AUTH_FAIL,
    });
  }
};

//register User
export const register = (
  name,
  email,
  password,
  passwordConfirm,
  phone
) => async (dispatch) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    passwordConfirm,
    phone,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/v1/users/signup', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Account created successfully', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message,
    });
  }
};

//login user
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/v1/users/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Successfully log in', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
};

//logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.post('/api/v1/users/logout');
    dispatch({
      type: LOGOUT,
    });
    dispatch(setAlert('Successfully logout', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};
//update user
export const updateUser = (name, email, phone, address) => async (dispatch) => {
  const body = JSON.stringify({ name, email, address, phone });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updateme', body, config);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.user,
    });
    dispatch(setAlert('Data successfully updated', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};
export const updateUserOrders = (orders) => async (dispatch) => {
  const body = JSON.stringify({ orders });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updateme', body, config);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.user,
    });
    dispatch(setAlert('Order successfully created', 'success'));
    localStorage.removeItem('cart');
  } catch (err) {
    dispatch(setAlert('There was a problem with your order', 'danger'));
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};
export const forgotPassword = (email) => async (dispatch) => {
  const body = JSON.stringify({ email });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/v1/users/forgotPassword', body, config);
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('We send you a reset token on email', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: err.message,
    });
  }
};
export const resetPassword = (password, passwordConfirm, token) => async (
  dispatch
) => {
  const body = JSON.stringify({ password, passwordConfirm });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch(
      `/api/v1/users/resetPassword/${token}`,
      body,
      config
    );
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert('Password successfully changed', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: err.message,
    });
  }
};
//TODO:
//updatePassword
export const updatePassword = (
  currentPassword,
  password,
  passwordConfirm
) => async (dispatch) => {
  const body = JSON.stringify({ currentPassword, password, passwordConfirm });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updatepassword', body, config);
    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: res.data.data,
    });
    dispatch(setAlert('Password changed successfully', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: err.message,
    });
  }
};
