import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, CardActions, Button } from 'react-md';

import Comments from 'src/containers/comments/comments';
import 'src/styles/components/posts/posts.scss';

const Post = ({ post, showComments, onDelete, onToggleComments, commentsLoaded }) => {
  const onClickDelete = () => {
    onDelete(post.id);
  };
  const onClickShowComments = () => {
    onToggleComments({ commentsLoaded, id: post.id });
  };
  const commentsOffButton = <Button raised onClick={onClickShowComments} label="Show Comments" />;
  const commentsOnButton = <Button raised onClick={onClickShowComments} label="Hide Comments" />;
  return (
    <Card className="post">
      <CardTitle title={post.title} />
      <CardText>{post.body}</CardText>
      <CardActions>
        <div className="action-buttons">
          { showComments ? commentsOnButton : commentsOffButton }
          <Button icon secondary iconClassName="fa fa-trash" className="delete-button" onClick={onClickDelete} />
        </div>
      </CardActions>
      { showComments && <Comments postId={post.id} />}
    </Card>
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
