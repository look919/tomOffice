// Get visible products
export default (products, { text, color, minPrice, maxPrice }) => {
  return products.filter(product => {
    let textMatch = true;
    if (text)
      textMatch = product.name.toLowerCase().includes(text.toLowerCase());
    let colorMatch = true;
    if (color) colorMatch = product.colors.includes(color);

    const priceMatch = product.price < maxPrice && product.price > minPrice;
    return textMatch && colorMatch && priceMatch;
  });
};
