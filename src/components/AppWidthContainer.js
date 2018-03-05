import React from 'react';


class AppWidthContainer extends React.PureComponent {
  render() {
    return (
      <div className="app-width-container">
        {this.props.children}
      </div>
    );
  }
}

export default AppWidthContainer;
