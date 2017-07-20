import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardText } from 'react-md';
import 'src/styles/components/comments/comment.scss';

const Comment = ({ comment }) => (
  <Card className="comment">
    <CardTitle title={comment.name} />
    <CardText>{comment.body}</CardText>
  </Card>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;
