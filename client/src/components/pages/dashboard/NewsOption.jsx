import React from 'react';
import NewsOptionItem from './NewsOptionItem';
import selector from '../../../selectors/recProducts';
import { connect } from 'react-redux';

const NewsOption = ({ products }) => {
  products ? (products = products) : (products = []);
  let items = selector(products, ['new']);

  return (
    <div className='dashboard__recommended__content__news-option'>
      {items.map(item => (
        <NewsOptionItem
          key={item._id}
          link={`/item/${item._id}`}
          name={item.name}
          desc={
            'Aliquam nec ullamcorper sapien. Aliquam erat volutpat. Donec faucibus, nunc non molestie posuere, tortor massa vestibulum mi, vulputate tristique ex eros sit amet sapien. Maecenas ullamcorper elit vel metus euismod aliquet. Vestibulum iaculis lacus ac accumsan placerat. Nam quis ex magna.'
          }
          img={item.image}
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

export default connect(mapStateToProps, {})(NewsOption);
