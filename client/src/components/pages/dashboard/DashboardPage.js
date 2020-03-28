import React from 'react';
import Header from '../../layout/Header';
import Overview from './Overview';
import RecommendedStuff from './RecommendedStuff';
import Footer from '../../layout/Footer';

const DashboardPage = () => {
  return (
    <main className='container'>
      <Header />
      <Overview />
      <RecommendedStuff />
      <Footer />
    </main>
  );
};

export default DashboardPage;
