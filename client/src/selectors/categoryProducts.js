// Get visible products
export default (products, category = '') => {
  return products.filter(product => {
    return category === product.category;
  });
};
