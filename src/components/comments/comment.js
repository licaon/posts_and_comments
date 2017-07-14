import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ post }) => (
  <div>
    <h3>{post.name}</h3>
    <p>{post.body}</p>
  </div>
);

Comment.propTypes = {
  post: PropTypes.object,
};

export default Comment;
