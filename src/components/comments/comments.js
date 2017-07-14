import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'src/components/comments/comment';
import Loading from 'src/components/basic/loading';

const Comments = ({ comments }) => {
  const commentsLoaded = () => comments.map(post => <Comment key={post.id} post={post} />);
  return (
    <div>
      { typeof comments === 'undefined' ? <Loading /> : commentsLoaded() }
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};

export default Comments;
