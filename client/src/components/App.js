import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from './../utils/setAuthToken';

import Alert from './layout/Alert';
import DashboardPage from './pages/DashboardPage';
import '../styles/main.scss';

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
