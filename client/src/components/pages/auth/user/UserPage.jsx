import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../../../layout/Header';
import User from './User';
import UserSettings from './UserSettings';
import UserOrders from './UserOrders';
import Footer from '../../../layout/Footer';

const UserPage = ({ auth, match }) => {
  if (!auth) {
    return <Redirect to='/' />;
  }

  return (
    <main className='container container--category'>
      <Header />
      {match.path === '/user' ? (
        <User />
      ) : match.path === '/settings' ? (
        <UserSettings />
      ) : (
        <UserOrders />
      )}
      <Footer />
    </main>
  );
};

UserPage.propTypes = {
  auth: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(UserPage);
