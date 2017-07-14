import React from 'react';
import PropTypes from 'prop-types';

import Comments from 'src/containers/comments/comments';

const Post = ({ post, onDelete, showComments, onToggleComments, commentsLoaded }) => {
  const onClickDelete = () => {
    onDelete(post.id);
  };
  const onClickShowComments = () => {
    onToggleComments({ commentsLoaded, id: post.id });
  };
  const commentsOff = <button onClick={onClickShowComments}>Show Comments</button>;
  const commentsOn = (
    <div>
      <button onClick={onClickShowComments}>Hide Comments</button>
      <Comments postId={post.id} />
    </div>
  );
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <button onClick={onClickDelete}>Delete</button>
      { showComments ? commentsOn : commentsOff }
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  showComments: PropTypes.bool,
  commentsLoaded: PropTypes.bool,
  onDelete: PropTypes.func,
  onToggleComments: PropTypes.func,
};

export default Post;
