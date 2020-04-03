import React from 'react';

import Header from '../../layout/Header';
import Item from './Item';
import Footer from '../../layout/Footer';

const ItemPage = props => {
  return (
    <main className='container container--category'>
      <Header />
      <Item category={props.match.params.category} id={props.match.params.id} />
      <Footer />
    </main>
  );
};

export default ItemPage;
