import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import Header from '../../../layout/Header';
import User from './User';
import Footer from '../../../layout/Footer';

const UserPage = ({ auth }) => {
  if (!auth) {
    return <Redirect to='/login' />;
  }

  return (
    <main className='container container--category'>
      <Header />
      <User />
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
