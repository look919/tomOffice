export default id => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const newCart = cart.filter(item => item.id !== id);

  cart = JSON.stringify(newCart);
  localStorage.setItem('cart', cart);
};
