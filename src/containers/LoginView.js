import React from 'react';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import FormRow from '../Form/FormRow';
import Label from '../Form/Label';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { history } from '../Root';
import * as paths from '../paths';
import AppContent from '../components/AppContent';
import App from './App/App';


class LoginView extends React.PureComponent {
  form = {};

  handleLoginClick = () => {
    localStorage.setItem('sessionId', '5');
    history.replace(paths.index);
  };

  render() {
    return (
      <App>
        <AppHeader />

        <AppContent>
          <div className="login-form">
            <FormRow vertical={true}>
              <Label>Email</Label>
              <Input ref={el => this.form.email = el} />
            </FormRow>
            <FormRow vertical={true}>
              <Label>Password</Label>
              <Input ref={el => this.form.password = el} input={{ type: 'password' }} />
            </FormRow>
            <FormRow>
              <Button onClick={this.handleLoginClick}>Sign in</Button>
            </FormRow>
          </div>
        </AppContent>

        <AppFooter />
      </App>
    );
  }
}

export default LoginView;
