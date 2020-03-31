import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import { getAllProducts } from '../actions/products';
import selector from '../selectors/products';
import setAuthToken from './../utils/setAuthToken';

import Alert from './layout/Alert';
import DashboardPage from './pages/dashboard/DashboardPage';
import '../styles/main.scss';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getAllProducts());
  }, []);

  //console.log(selector(getAllProducts(), { text: 'baba', color: 'white' }));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alert />
          <Switch>
            <Route path='/' component={DashboardPage} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
