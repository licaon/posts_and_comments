import * as PostsSelectors from 'src/selectors/posts-selectors';

describe('PostsSelectors', () => {
  it(`should execute getPosts correctly`, (done) => {
    expect(PostsSelectors.getPosts({
      PostsReducer: {
        posts: 'PostsReducer.posts',
      },
    })).toMatchSnapshot();

    done();
  });
  it(`should execute getSelectFiltersValue correctly`, (done) => {
    expect(PostsSelectors.getPostsFilterBySearch.resultFunc(
      [
        {
          field1: 'testing',
          field2: 'something else',
        },
        {
          field1: 'something else',
          field2: 'something else',
        },
        {
          field1: 'something else',
          field2: 'TEST',
        },
      ],
      {
        search: {
          value: 'test',
          fields: ['field1', 'field2'],
        }
      }
    )).toMatchSnapshot();

    done();
  });
  it(`should execute getPostsFilteredBySelect correctly`, (done) => {
    expect(PostsSelectors.getPostsFilteredBySelect.resultFunc(
      [
        {
          field1: 'testing',
          field2: 'something else',
        },
        {
          field1: 'something else',
          field2: 'something else',
        },
        {
          field1: 'test',
          field2: 'something else',
        },
        {
          field1: 'something else',
          field2: 'test',
        },
        {
          field1: 'something else',
          field2: 'TEST',
        },
      ],
      {
        search: {
          value: 'test',
          fields: ['field1', 'field2'],
        },
      },
    )).toMatchSnapshot();

    done();
  });
  it(`should execute getFilteredPosts correctly`, (done) => {
    expect(PostsSelectors.getFilteredPosts.resultFunc(
      [
        {
          id: 'test',
          field: 'something else',
        },
        {
          id: 'something else',
          field: 'something else',
        },
        {
          id: 'another id 2',
          field: 'TEST',
        },
      ],
      [
        {
          id: 'test',
          field: 'something else',
        },
        {
          id: 'something else',
          field: 'test',
        },
        {
          id: 'another id 1',
          field: 'TEST',
        },
      ],
    )).toMatchSnapshot();

    done();
  });
});
