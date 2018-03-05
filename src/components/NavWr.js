import React from 'react';
import { history } from '../Root';

class NavWr extends React.PureComponent {
  handleClick = (e) => {
    const {
      path,
      state,
    } = this.props;

    if (path) {
      history.push(path, state);
    }
  };

  render() {
    const children = this.props.children;

    if (typeof children === 'string') {
      return <span onClick={this.handleClick}>{children}</span>
    }

    return React.cloneElement(children, { onClick: this.handleClick })
  }
}

export default NavWr;
