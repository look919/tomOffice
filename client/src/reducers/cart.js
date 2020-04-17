import {
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_FAIL,
  UPDATE_USER_SUCCESS,
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_ITEMS_SUCCESS:
      return [...payload];
    case UPDATE_USER_SUCCESS:
      return [];
    case GET_CART_ITEMS_FAIL:
    default:
      return state;
  }
}
