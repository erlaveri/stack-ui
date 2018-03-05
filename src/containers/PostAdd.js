import React from 'react';
import AppWidthContainer from '../components/AppWidthContainer';
import Button from '../Form/Button';
import * as paths from '../paths';

class PostAdd extends React.PureComponent {
  handleSave = () => {
    const text = this.textEl.value;

    fetch(paths.postAddApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: text,
      })
    });
  };

  render() {
    return (
      <AppWidthContainer>
        <textarea ref={el => this.textEl = el} />
        <Button onClick={this.handleSave}>
          Save
        </Button>
      </AppWidthContainer>
    );
  }
}

PostAdd.defaultProps = {};

export default PostAdd;
