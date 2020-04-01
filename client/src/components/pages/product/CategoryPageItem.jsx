import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../actions/products';
import selector from '../../../selectors/categoryProducts';

export const CategoryPageItem = ({ products, category, getAllProducts }) => {
  products ? (products = products) : (products = []);

  const items = selector(products, `${category}`);
  console.log(items);

  const categories = ['officeCabinet', 'sofa', 'desk', 'chair', 'lighting'];
  if (!categories.includes(category)) {
    return <Redirect to={'/'} />;
  }
  return (
    <section className='categoryPage'>
      <div className='categoryPage__filters'>Filters</div>
      <div className='categoryPage__items'>
        {items.map(item => (
          <div className='categoryPage__item' key={item._id}>
            <img
              src={require(`../../../img/${item.image}`)}
              className='categoryPage__item__img'
            />
            <div className='categoryPage__item__name'>{item.name}</div>
            <div className='categoryPage__item__prices'>
              <span className='categoryPage__item__price'>{item.price}</span>
              <span className='categoryPage__item__oldPrice'>
                {item.oldPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, { getAllProducts })(CategoryPageItem);
