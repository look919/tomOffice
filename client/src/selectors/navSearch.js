//returns 3 items that matches current text
export default (products, text) =>
  products
    .filter((product) => {
      if (text.length >= 3) {
        return product.name.toLowerCase().includes(text.toLowerCase());
      } else {
        return false;
      }
    })
    .slice(0, 3);
