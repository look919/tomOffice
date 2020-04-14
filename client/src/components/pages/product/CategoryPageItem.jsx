import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import selector from '../../../selectors/categoryProducts';
import filterSelector from '../../../selectors/filterProducts';
import { getCartItems } from '../../../actions/products';
import addItemToCart from '../../../utils/addItemToCart';
import { SearchIcon, CartIconButton } from '../../layout/Icons';

export const CategoryPageItem = ({ products, category, getCartItems }) => {
  //Filters
  const [filters, setFilters] = useState({
    text: '',
    minPrice: 1,
    maxPrice: 10000,
    color: '',
  });
  const { text, minPrice, maxPrice, color } = filters;
  const onChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  const clearFilters = () =>
    setFilters({
      text: '',
      minPrice: 0,
      maxPrice: 10000,
      color: '',
    });

  //Products
  if (!products) products = [];
  let items = selector(products, `${category}`);
  if (text !== '' || minPrice !== 0 || maxPrice !== 10000 || color !== '')
    items = filterSelector(items, filters);

  const handleButton = (item) => {
    addItemToCart(item);
    getCartItems(products);
  };

  //Redirecting
  const categories = ['officeCabinet', 'sofa', 'desk', 'chair', 'lighting'];
  if (!categories.includes(category)) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className='categoryPage'>
      <div className='categoryPage__filters'>
        <h3 className='heading-3 categoryPage__filters__header'>Filtry</h3>
        <button
          className='btn categoryPage__filters__clear'
          onClick={clearFilters}
        >
          Wyczyść filtry
        </button>
        <h4 className='heading-4 categoryPage__filters__prices__header'>
          Cena
        </h4>
        <h4 className='heading-4 categoryPage__filters__colors__header'>
          Kolor
        </h4>
        <h4 className='heading-4 categoryPage__filters__text__header'>Nazwa</h4>

        <div className='categoryPage__filters__prices'>
          <input
            name='minPrice'
            value={filters.minPrice}
            onChange={(e) => onChange(e)}
            className='categoryPage__filters__input'
            placeholder='Min price'
            type='number'
            min='0'
            max='10000'
          />
          <input
            className='categoryPage__filters__input'
            placeholder='Max price'
            type='number'
            min='1'
            max='10000'
            maxLength={5}
            name='maxPrice'
            value={filters.maxPrice}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='categoryPage__filters__colors'>
          {color === '' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--rainbow'
              name='color'
              value={''}
              onClick={(e) => onChange(e)}
            ></button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--rainbow'
              name='color'
              value={''}
              onClick={(e) => onChange(e)}
            ></button>
          )}
          {color === 'black' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--black'
              name='color'
              value={'black'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--black'
              name='color'
              value={'black'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          )}
          {color === 'grey' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--grey'
              name='color'
              value={'grey'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--grey'
              name='color'
              value={'grey'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          )}
          {color === 'brown' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--brown'
              name='color'
              value={'brown'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--brown'
              name='color'
              value={'brown'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          )}
          {color === 'blue' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--blue'
              name='color'
              value={'blue'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--blue'
              name='color'
              value={'blue'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          )}
          {color === 'white' ? (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--active categoryPage__filters__colors__color--white'
              name='color'
              value={'white'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          ) : (
            <button
              className='categoryPage__filters__colors__color categoryPage__filters__colors__color--white'
              name='color'
              value={'white'}
              onClick={(e) => onChange(e)}
            >
              &nbsp;
            </button>
          )}
        </div>
        <div className='categoryPage__filters__text'>
          <input
            className='categoryPage__filters__input__search'
            placeholder='Insert item name'
            name='text'
            value={filters.text}
            onChange={(e) => onChange(e)}
          />
          <SearchIcon />
        </div>
      </div>
      <div className='categoryPage__items'>
        {items.map((item) => (
          <div className='categoryPage__item' key={item._id}>
            <Link to={`/item/${item._id}`}>
              <img
                src={require(`../../../img/${item.image}`)}
                className='categoryPage__item__img'
                alt='furniture view'
              />
            </Link>
            <Link to={`/item/${item._id}`}>
              <div className='categoryPage__item__name'>{item.name}</div>
            </Link>
            <div className='categoryPage__item__prices'>
              <span className='categoryPage__item__price'>
                {item.price.toFixed(2)}
              </span>
              <span className='categoryPage__item__oldPrice'>
                {item.oldPrice.toFixed(2)}
              </span>
            </div>

            {item.amount > 5 ? (
              <span className='categoryPage__item__amount categoryPage__item__amount--empty'>
                &nbsp;
              </span>
            ) : item.amount > 1 ? (
              <span className='categoryPage__item__amount categoryPage__item__amount--multi'>
                Ograniczona ilość!
              </span>
            ) : item.amount === 1 ? (
              <span className='categoryPage__item__amount categoryPage__item__amount--single'>
                Ostatnia sztuka!
              </span>
            ) : (
              <span className='categoryPage__item__amount categoryPage__item__amount--empty'>
                &nbsp;
              </span>
            )}

            <span className='categoryPage__item__magazine'>
              {item.amount > 0
                ? 'W magazynie - wysyłka 5 dni'
                : 'Produkt niedostepny'}
            </span>
            <button
              onClick={() => handleButton({ id: item._id, amount: 1 })}
              className='btn categoryPage__item__btn'
            >
              <CartIconButton className='categoryPage__item__icon' /> Dodaj do
              koszyka
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps, { getCartItems })(CategoryPageItem);
