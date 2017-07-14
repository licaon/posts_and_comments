import React from 'react';
import PropTypes from 'prop-types';

import Post from 'src/components/posts/post';

const Posts = ({ posts }) => (
  <div>
    { posts.map(post => <Post key={post.id} post={post} />)}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
