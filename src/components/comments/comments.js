import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/components/comments/comment';
import Loading from 'src/components/basic/loading';
import 'src/styles/components/comments/comments.scss';

const Comments = ({ comments, postId }) => {
  const commentsLoaded = () => comments.map(comment => <Comment key={comment.id} comment={comment} />);
  return (
    <div className="comments">
      { typeof comments === 'undefined' ? <Loading id={postId} /> : commentsLoaded() }
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  postId: PropTypes.number,
};

export default Comments;
