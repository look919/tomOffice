import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import selector from '../../../selectors/categoryProducts';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../../layout/Icons';

export const CategoryPageItem = ({ products, category }) => {
  products ? (products = products) : (products = []);
  const items = selector(products, `${category}`);

  const categories = ['officeCabinet', 'sofa', 'desk', 'chair', 'lighting'];
  if (!categories.includes(category)) {
    return <Redirect to={'/'} />;
  }
  return (
    <section className='categoryPage'>
      <div className='categoryPage__filters'>
        <h3 className='heading-3 categoryPage__filters__header'>Filtry</h3>
        <h4 className='heading-4 categoryPage__filters__prices__header'>
          Cena
        </h4>
        <h4 className='heading-4 categoryPage__filters__colors__header'>
          Kolor
        </h4>
        <h4 className='heading-4 categoryPage__filters__text__header'>Nazwa</h4>

        <div className='categoryPage__filters__prices'>
          <input
            className='categoryPage__filters__input'
            placeholder='Min price'
            type='number'
          />
          <input
            className='categoryPage__filters__input'
            placeholder='Max price'
            type='number'
          />
        </div>
        <div className='categoryPage__filters__colors'>
          <button className='categoryPage__filters__colors__color categoryPage__filters__colors__color--black'>
            &nbsp;
          </button>
          <button className='categoryPage__filters__colors__color categoryPage__filters__colors__color--grey'>
            &nbsp;
          </button>
          <button className='categoryPage__filters__colors__color categoryPage__filters__colors__color--brown'>
            &nbsp;
          </button>
          <button className='categoryPage__filters__colors__color categoryPage__filters__colors__color--blue'>
            &nbsp;
          </button>
          <button className='categoryPage__filters__colors__color categoryPage__filters__colors__color--white'>
            &nbsp;
          </button>
        </div>
        <div className='nav__top__item categoryPage__filters__text'>
          <input
            className='nav__top__item__input '
            placeholder='Insert item name'
          />
          <SearchIcon />
        </div>
      </div>
      <div className='categoryPage__items'>
        {items.map(item => (
          <div className='categoryPage__item' key={item._id}>
            <Link to={`/${category}/${item._id}`}>
              <img
                src={require(`../../../img/${item.image}`)}
                className='categoryPage__item__img'
              />
            </Link>
            <Link to={`/${category}/${item._id}`}>
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
            <button className='btn categoryPage__item__btn'>Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, {})(CategoryPageItem);
