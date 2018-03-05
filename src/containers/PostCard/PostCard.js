import React from 'react';
import './styles.css';
import * as paths from '../../paths';
import { pushNav } from '../../utils';

class PostCard extends React.PureComponent {
  handleClick = () => {
    const { post } = this.props;
    pushNav(paths.post, { id: post.id })
  };

  render() {
    const { post } = this.props;

    return (
      <div className="post-card">
        <div className="post-card--title" onClick={this.handleClick}>
          {post.title}
        </div>
        {post.text}
      </div>
    );
  }
}

export default PostCard;
