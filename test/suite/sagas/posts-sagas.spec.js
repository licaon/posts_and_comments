import * as PostsSagas from 'src/sagas/posts-sagas';

describe('PostsSagas', () => {
  it(`should execute getPosts correctly`, (done) => {
    const generator = PostsSagas.getPosts();

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(['comment1']).value).toMatchSnapshot();

    done();
  });
  it(`should execute deletePosts correctly`, (done) => {
    const generator = PostsSagas.deletePosts({
      payload: {
        id: 1,
      },
    });

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next({ error: false }).value).toMatchSnapshot();

    done();
  });
});
