import React from 'react';

import Header from '../../layout/Header';
import CategoryPageItem from './CategoryPageItem';
import Footer from '../../layout/Footer';

export const CategoryPage = props => {
  return (
    <main className='container container--category'>
      <Header />
      <CategoryPageItem category={props.match.params.category} />
      <Footer />
    </main>
  );
};

export default CategoryPage;
