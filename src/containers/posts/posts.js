import { connect } from 'react-redux';

import Posts from 'src/components/posts/posts';
import { getFilteredPosts } from 'src/selectors/posts-selectors';

const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
