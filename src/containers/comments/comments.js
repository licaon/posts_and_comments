import { connect } from 'react-redux';

import Comments from 'src/components/comments/comments';
import { getComments } from 'src/selectors/comments-selectors';

const mapStateToProps = (state, { postId }) => ({
  comments: getComments(state)[postId],
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
