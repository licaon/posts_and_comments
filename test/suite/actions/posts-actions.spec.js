import * as PostsActions from 'src/actions/posts-actions';

describe('PostsActions', () => {
  it('should execute action correctly with argument - #getPosts', (done) => {
    expect(PostsActions.getPosts({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #getPosts', (done) => {
    expect(PostsActions.getPosts()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #addPost', (done) => {
    expect(PostsActions.addPost({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #addPost', (done) => {
    expect(PostsActions.addPost()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #requestPostDelete', (done) => {
    expect(PostsActions.requestPostDelete({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #requestPostDelete', (done) => {
    expect(PostsActions.requestPostDelete()).toMatchSnapshot();
    done();
  });
  it('should execute action correctly with argument - #confirmPostDelete', (done) => {
    expect(PostsActions.confirmPostDelete({ test: 'test' })).toMatchSnapshot();
    done();
  });
  it('should execute action correctly without argument - #confirmPostDelete', (done) => {
    expect(PostsActions.confirmPostDelete()).toMatchSnapshot();
    done();
  });
});
