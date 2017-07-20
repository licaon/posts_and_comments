import * as CommentsSagas from 'src/sagas/comments-sagas';

describe('CommentsSagas', () => {
  it(`should execute getComments correctly`, (done) => {
    const generator = CommentsSagas.getComments({
      payload: {
        id: 1,
      },
    });

    expect(generator.next().value).toMatchSnapshot();
    expect(generator.next(['comment1']).value).toMatchSnapshot();

    done();
  });
});
