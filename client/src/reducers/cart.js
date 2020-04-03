import { GET_CART_ITEMS_SUCCESS, GET_CART_ITEMS_FAIL } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CART_ITEMS_SUCCESS:
      return [...payload];
    case GET_CART_ITEMS_FAIL:
    default:
      return state;
  }
}
