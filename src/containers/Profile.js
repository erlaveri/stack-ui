import React from 'react';
import AppHeader from '../components/AppHeader';
import AppContent from '../components/AppContent';
import AppFooter from '../components/AppFooter';

class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;
