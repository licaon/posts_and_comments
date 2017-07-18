import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardText } from 'react-md';
import 'src/styles/components/comments/comment.scss';

const Comment = ({ post }) => (
  <Card className="comment">
    <CardTitle title={post.name} />
    <CardText>{post.body}</CardText>
  </Card>
);

Comment.propTypes = {
  post: PropTypes.object,
};

export default Comment;
