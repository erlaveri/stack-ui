import React from 'react';


class FormRow extends React.PureComponent {
  render() {
    return (
      <div className="form-row">
        {this.props.children}
      </div>
    );
  }
}

export default FormRow;
