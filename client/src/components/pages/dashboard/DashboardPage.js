import React from 'react';
import Header from '../../layout/Header';
import Overview from './Overview';

const DashboardPage = () => {
  return (
    <main className='container'>
      <Header />
      <Overview />
    </main>
  );
};

export default DashboardPage;
