// Get visible products
export default (products, text) => {
  const listOfItems = products.filter((product) => {
    if (text) return product.name.toLowerCase().includes(text.toLowerCase());
  });
  return listOfItems.slice(0, 3);
};
