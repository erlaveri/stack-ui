import React from 'react';


class Button extends React.PureComponent {
  render() {
    return (
      <div className="btn" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
