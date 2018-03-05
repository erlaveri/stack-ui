import React from 'react';


class FormInput extends React.PureComponent {
  render() {
    const {
      input,
      wrapper,
    } = this.props;

    return (
      <div className="form-input" {...wrapper}>
        <input type="text" {...input} />
      </div>
    );
  }
}

FormInput.defaultProps = {
  input: {},
  wrapper: {},
};

export default FormInput;
