import React from 'react';
import Header from '../../layout/Header';
import Overview from './Overview';
import RecommendedStuff from './RecommendedStuff';

const DashboardPage = () => {
  return (
    <main className='container'>
      <Header />
      <Overview />
      <RecommendedStuff />
    </main>
  );
};

export default DashboardPage;
