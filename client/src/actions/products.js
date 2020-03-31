import axios from 'axios';
import { GET_ALL_PRODUCTS_SUCCESS, GET_ALL_PRODUCTS_FAIL } from './types';
import selector from '../selectors/recProducts';

export const getAllProducts = (category = '') => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products/${category}`);

    const recommended = await selector(res.data.data.data, [
      'recommended',
      'hit',
      'new'
    ]);
    console.log(res.data);
    res.data.recommended = recommended;

    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};

export const getRecommendedProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/products');

    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};
