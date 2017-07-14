import { connect } from 'react-redux';

import Post from 'src/components/posts/post';
import { PostsActions } from 'src/actions';

const mapStateToProps = undefined;

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(PostsActions.requestPostDelete({ id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
