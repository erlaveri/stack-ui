import React from 'react';
import AppWidthContainer from './AppWidthContainer';


class AppFooter extends React.PureComponent {
  render() {
    return (
      <div className="app-footer">
        {
          this.props.children ||
          <AppWidthContainer>
            app-footer
          </AppWidthContainer>
        }
      </div>
    );
  }
}

export default AppFooter;
