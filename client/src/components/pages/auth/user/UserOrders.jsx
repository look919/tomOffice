import React from 'react';
import UserNav from './UserNav';

const UserOrders = () => {
  return (
    <section className='userPage'>
      <UserNav />
      <section className='userPage__orders'>
        <h2 className='userPage__orders__header'>Twoje zamówienia</h2>
      </section>
    </section>
  );
};

export default UserOrders;
