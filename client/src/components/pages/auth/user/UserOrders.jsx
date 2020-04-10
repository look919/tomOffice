import React from 'react';
import UserNav from './UserNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UserOrders = ({ user }) => {
  return (
    <section className='userPage'>
      <UserNav />
      <section className='userPage__orders'>
        <h2 className='userPage__orders__header'>Twoje zamówienia</h2>
        <div className='userPage__orders__list'>
          {user.orders.map((order) => (
            <div key={order}>{order}</div>
          ))}
        </div>
      </section>
    </section>
  );
};

UserOrders.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});
export default connect(mapStateToProps, {})(UserOrders);
