// Get visible products
export default (products, { text, color }) => {
  return products.filter(product => {
    const textMatch = product.name.toLowerCase().includes(text.toLowerCase());
    const colorMatch = product.colors.includes(color);

    return textMatch && colorMatch;
  });
};
