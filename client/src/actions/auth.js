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
export const register = (name, email, password, passwordConfirm) => async (
  dispatch
) => {
  const body = JSON.stringify({
    name,
    email,
    password,
    passwordConfirm,
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
    console.log(err.response);
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
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

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
