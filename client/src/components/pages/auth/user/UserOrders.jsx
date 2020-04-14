import React from 'react';
import UserNav from './UserNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

const UserOrders = ({ user }) => {
  if (!user)
    user = {
      orders: [{ items: [] }],
    };

  return (
    <section className='userPage'>
      <UserNav />
      <section className='userPage__orders'>
        <h2 className='userPage__orders__header'>Twoje zamówienia</h2>
        <div className='userPage__orders__list'>
          {user.orders.map((order) => (
            <div key={order._id} className='userPage__orders__list__item'>
              <h4 className='heading-4 userPage__orders__list__header'>{`Zamówienie z dnia ${moment(
                order.createdAt
              ).format('DD-MM-YYYY')}`}</h4>
              {order.items.map((item) => (
                <div
                  className='userPage__orders__list__item__product'
                  key={item.product._id}
                >
                  <span>{item.product.name}</span>
                  <span>{`${item.amount}szt`}</span>
                  <span>{`${item.product.price.toFixed(2)} zł`}</span>
                </div>
              ))}
              <span className='userPage__orders__list__item__product__price'>{`Razem ${order.price.toFixed(
                2
              )} zł`}</span>
            </div>
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
