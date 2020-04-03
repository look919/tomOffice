export default products => {
  const items = JSON.parse(localStorage.getItem('cart')) || [];
  let array = [];
  items.forEach(item => {
    array.push(products.find(product => product._id === item.id));
  });

  return array;
};
