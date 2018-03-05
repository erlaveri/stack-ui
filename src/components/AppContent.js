import React from 'react';
import AppWidthContainer from './AppWidthContainer';


class AppContent extends React.PureComponent {
  render() {
    return (
      <div className="app-content">
        {this.props.children}
      </div>
    );
  }
}

export default AppContent;
