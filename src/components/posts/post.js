import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post, onDelete }) => {
  const onClickDelete = () => {
    onDelete(post.id);
  };
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={onClickDelete}>Delete</button>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Post;
