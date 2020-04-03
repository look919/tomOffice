import React from 'react';

import Header from '../../layout/Header';
import Cart from './Cart';
import Footer from '../../layout/Footer';

const CartPage = props => {
  return (
    <main className='container container--category'>
      <Header />
      <Cart />
      <Footer />
    </main>
  );
};

export default CartPage;
