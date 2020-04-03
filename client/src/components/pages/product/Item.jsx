import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import addItemToCart from '../../../utils/addItemToCart';
import selector from '../../../selectors/singleProduct';
import { CartIconButton } from '../../layout/Icons';
import { getCartItems } from '../../../actions/products';

export const Item = ({ products, id, getCartItems }) => {
  const [amount, setAmount] = useState(1);
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };
  const increaseAmount = () => {
    if (amount < 9) {
      setAmount(amount + 1);
    }
  };

  //Product
  if (!products) products = [];
  let item = selector(products, id);

  const handleButton = item => {
    addItemToCart(item);
    setAmount(1);
    getCartItems(products);
  };

  return (
    <Fragment>
      {!item ? (
        <div>&nbsp;</div>
      ) : (
        <section className='itemPage'>
          <div className='itemPage__links-back'>
            <Link to='/'>TomOffice</Link>/
            <Link to={`/products/${item.category}`}>{item.category}</Link>/
            <Link to={`/item/${item._id}`}>{item.name}</Link>/
          </div>
          <div className='itemPage__img'>
            <img
              alt='item view'
              className='itemPage__img'
              src={require(`../../../img/${item.image}`)}
            />
            {item.amount > 5 ? (
              <span className='itemPage__amount itemPage__amount--empty'>
                &nbsp;
              </span>
            ) : item.amount > 1 ? (
              <span className='itemPage__amount itemPage__amount--multi'>
                Ograniczona ilość!
              </span>
            ) : item.amount === 1 ? (
              <span className='itemPage__amount itemPage__amount--single'>
                Ostatnia sztuka!
              </span>
            ) : (
              <span className='itemPage__amount itemPage__amount--empty'>
                &nbsp;
              </span>
            )}
          </div>
          <div className='itemPage__details'>
            <span className='itemPage__details__name'>{item.name}</span>
            <div className='itemPage__details__prices'>
              <span className='itemPage__details__price'>
                {item.price.toFixed(2)}
              </span>
              <span className='itemPage__details__oldPrice'>
                {item.oldPrice.toFixed(2)}
              </span>
            </div>
            <div className='itemPage__details__amountbox'>
              <button
                className='itemPage__details__amountbox__btn'
                onClick={decreaseAmount}
              >
                -
              </button>
              <input
                type='number'
                className='itemPage__details__amount'
                disabled
                value={amount}
              />

              <button
                className='itemPage__details__amountbox__btn'
                onClick={increaseAmount}
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleButton({ id: item._id, amount })}
              className='btn itemPage__details__btn'
            >
              <CartIconButton /> Dodaj do koszyka
            </button>
          </div>
          <div className='itemPage__description'>
            Vestibulum quis nisi eu risus semper feugiat et ut mi. Nullam
            suscipit semper velit vel maximus. Praesent id imperdiet lectus, non
            mattis urna. Cras eleifend felis eget ex sodales fringilla.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. In tincidunt tristique lectus eu facilisis.
            Sed in turpis nibh. Etiam faucibus faucibus ullamcorper. Donec
            faucibus, quam ac malesuada mollis, libero est pharetra felis, sed
            rutrum tellus purus sed erat. Donec scelerisque finibus
            pellentesque. Quisque sed justo tincidunt, rhoncus augue quis,
            laoreet mauris. Donec nec blandit odio. Pellentesque tempor ultrices
            malesuada. Pellentesque posuere feugiat diam ut interdum. Duis et
            tellus eget arcu posuere fringilla vitae lacinia urna. Pellentesque
            a semper nibh, non tincidunt ligula. Sed feugiat imperdiet nibh, sed
            consectetur augue elementum nec. Proin ut vehicula tortor. Etiam
            purus orci, finibus nec massa id, ornare bibendum ante. Morbi et
            elit volutpat, molestie massa a, posuere erat. Nulla convallis
            ornare purus, id blandit sapien dapibus et. Curabitur sit amet
            turpis finibus, semper tortor non, pharetra nisi. Nunc aliquet
            cursus viverra. Proin consequat elit in quam commodo convallis.
            Mauris lacinia ullamcorper dolor, non malesuada mi. Aliquam maximus
            tristique urna, et bibendum risus sodales in. Proin bibendum
            imperdiet viverra. Nulla mi sem, gravida sed nisl imperdiet, ornare
            auctor orci.
            <ul className='itemPage__description__list'>
              <li>Etiam viverra dolor venenatis gravida mollis</li>
              <li>
                Aliquam vel arcu ultrices, dictum lectus semper, fringilla ex
              </li>
              <li>
                Quisque faucibus orci quis mauris suscipit, id placerat ligula
                imperdiet
              </li>
              <li>
                Phasellus et tellus suscipit, maximus erat at, finibus odio
              </li>
              <li>Maecenas molestie mauris sit amet hendrerit blandit</li>
              <li>Praesent semper mi eget tortor efficitur rhoncus</li>
              <li>Nulla eu elit eget augue euismod porta.</li>
            </ul>
            <ul className='itemPage__description__list'>
              <li>Quisque eu diam sit amet ex consequat fermentum.</li>
              <li>Etiam tempor purus ut lorem blandit sagittis</li>
              <li>
                Morbi varius risus ut mauris malesuada, in semper nibh porttitor
              </li>
            </ul>
          </div>
        </section>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps, { getCartItems })(Item);
