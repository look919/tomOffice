import React from 'react';
import RecommendedOptionItem from './RecommendedOptionItem';
import selector from '../../../selectors/recProducts';
import { connect } from 'react-redux';

const RecommendedOption = ({ products }) => {
  if (!products) products = [];
  let items = selector(products, ['recommended']);

  return (
    <div className='dashboard__recommended__content__rec-option'>
      {items.map(item => (
        <RecommendedOptionItem
          key={item._id}
          id={item._id}
          link={`/item/${item._id}`}
          img={item.image}
          name={item.name}
          price={item.price}
          oldPrice={item.oldPrice}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, {})(RecommendedOption);
