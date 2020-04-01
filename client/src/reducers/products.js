import { GET_ALL_PRODUCTS_SUCCESS } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PRODUCTS_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
}
