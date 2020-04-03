// Get visible products
export default (products, state = []) => {
  return products.filter(product => {
    return state.includes(product.state);
  });
};
