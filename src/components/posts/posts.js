import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/containers/posts/post';

const Posts = ({ posts }) => (
  <div className="md-cell--8">
    { posts.map(post => <Post key={post.id} post={post} />)}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
