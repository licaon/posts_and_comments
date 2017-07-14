import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
