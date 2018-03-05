import React from 'react';
import AppHeader from '../../components/AppHeader';
import AppContent from '../../components/AppContent';
import AppFooter from '../../components/AppFooter';
import * as paths from '../../paths';
import Feed from '../Feed';
import { Route, Switch } from 'react-router';
import Post from '../Post';
import PostAdd from '../PostAdd';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        {
          this.props.children ||
          <React.Fragment>
            <AppHeader />
            <AppContent>
              <Switch>
                <Route path={paths.index} exact={true} component={Feed} />
                <Route path={paths.postAdd} exact={true} component={PostAdd} />
                <Route path={paths.post} exact={true} component={Post} />
              </Switch>
            </AppContent>
            <AppFooter />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
