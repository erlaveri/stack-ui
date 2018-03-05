import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router';

import App from './containers/App/App';
import LoginView from './containers/LoginView';

// import { locationChangeRequestAction } from './components/History/locationReducer';


const RELATIVE_PATH = '/';

// export const store = configureStore();
export const history = createBrowserHistory({
  basename: RELATIVE_PATH,
});

// store.dispatch(locationChangeRequestAction(history.location));
// history.listen(location => store.dispatch(locationChangeRequestAction(location)));


class Root extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginView} />
          {/*<PrivateRoute path="/change-password" component={ChangePasswordScreen} />*/}
          <Route path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
