import { connect } from 'react-redux';

import Post from 'src/components/posts/post';
import { PostsActions, CommentsActions } from 'src/actions';
import { getComments, getCommentsState } from 'src/selectors/comments-selectors';

const mapStateToProps = (state, { post }) => ({
  commentsLoaded: !!getComments(state)[post.id],
  showComments: !!getCommentsState(state)[post.id],
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => {
    dispatch(PostsActions.requestPostDelete({ id }));
  },
  onToggleComments: ({ id, commentsLoaded }) => {
    if (!commentsLoaded) {
      dispatch(CommentsActions.getComments({ id }));
    }
    dispatch(CommentsActions.toggleCommentsState({ postId: id }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
