import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAIL
} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, ...payload };
    case GET_ALL_PRODUCTS_FAIL:
    default:
      return state;
  }
}
