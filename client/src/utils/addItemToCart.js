import { setAlert } from '../actions/alert';

export default (item = '') => {
  if (item) {
    let items = JSON.parse(localStorage.getItem('cart')) || [];
    items.push(item);

    localStorage.setItem('cart', JSON.stringify(items));
  }
};
