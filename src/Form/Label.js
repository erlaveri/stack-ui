import React from 'react';


class FormLabel extends React.PureComponent {
  render() {
    return (
      <div className="form-label">
        {this.props.children}
      </div>
    );
  }
}

export default FormLabel;
