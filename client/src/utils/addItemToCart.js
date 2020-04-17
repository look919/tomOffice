export default (item = '') => {
  if (item) {
    let items = JSON.parse(localStorage.getItem('cart')) || [];

    //if there is already the same item in cart, just add amount of item, else add new item

    let copyOfItem = false;
    items.forEach((cartItem) => {
      if (item.id === cartItem.id) {
        cartItem.amount = cartItem.amount + item.amount;
        copyOfItem = true;
      }
    });

    if (!copyOfItem) items.push(item);

    localStorage.setItem('cart', JSON.stringify(items));
  }
};
