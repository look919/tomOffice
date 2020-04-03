import axios from 'axios';
import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_FAIL
} from './types';

export const getAllProducts = (category = '') => async dispatch => {
  try {
    const res = await axios.get(`/api/v1/products/${category}`);

    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};

export const getCartItems = (prod = '') => async dispatch => {
  try {
    let products;

    //case for app.js without connecting state to component
    if (!prod) {
      const res = await axios.get(
        `/api/v1/products?fields=name,price,image,amount`
      );
      products = res.data.data.data;
    } else {
      products = prod;
    }

    const items = JSON.parse(localStorage.getItem('cart')) || [];
    let array = [];
    items.forEach(item => {
      const product = products.find(product => product._id === item.id);
      array.push({ product, amount: item.amount });
    });

    dispatch({
      type: GET_CART_ITEMS_SUCCESS,
      payload: array
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_CART_ITEMS_FAIL,
      payload: { msg: 'error', status: 'not found' }
    });
  }
};
