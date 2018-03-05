import React from 'react';
import NavWr from '../components/NavWr';
import * as  paths from '../paths';
import AppWidthContainer from './AppWidthContainer';


class AppHeader extends React.PureComponent {
  render() {
    return (
      <div className="app-header">
        {
          this.props.children ||
          <AppWidthContainer>
            <NavWr path={paths.postAdd}>Add post</NavWr>
            <NavWr path={paths.index}>Index</NavWr>
            <NavWr path={paths.login}>Login</NavWr>
          </AppWidthContainer>
        }
      </div>
    );
  }
}

export default AppHeader;
