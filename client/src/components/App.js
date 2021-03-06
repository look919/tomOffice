import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import { getAllProducts, getCartItems } from '../actions/products';

import setAuthToken from './../utils/setAuthToken';

import Alert from './layout/Alert';
import DashboardPage from './pages/dashboard/DashboardPage';
import CartPage from './pages/cart/CartPage';
import CategoryPage from './pages/product/CategoryPage';
import ItemPage from './pages/product/ItemPage';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import UserPage from './pages/auth/user/UserPage';
import ForgetPasswordPage from './pages/auth/ForgetPassword';
import ResetPasswordPage from './pages/auth/ResetPassword';
import NotFoundPage from './layout/NotFoundPage';

import '../styles/main.scss';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }
  useEffect(() => {
    store.dispatch(getAllProducts());
    store.dispatch(getCartItems());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/forgetPassword" component={ForgetPasswordPage} />
            <Route
              path="/resetPassword/:token"
              render={(props) => (
                <ResetPasswordPage {...props} isAuthed={true} />
              )}
            />

            <Route path="/user" component={UserPage} />
            <Route path="/settings" component={UserPage} />
            <Route path="/orders" component={UserPage} />
            <Route
              path="/products/:category"
              render={(props) => <CategoryPage {...props} isAuthed={true} />}
            />
            <Route
              path="/item/:id"
              render={(props) => <ItemPage {...props} isAuthed={true} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
