import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Post from 'src/components/posts/post';

describe('Post component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Post
        onDelete={() => {}}
        onToggleComments={() => {}}
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly without comments', (done) => {
    const component = createComponent({
      post: {
        id: 1,
        title: 'title',
        body: 'body',
      },
    });

    expect(component).toMatchSnapshot();
    done();
  });
  it('should render component correctly with comments', (done) => {
    const component = createComponent({
      post: {
        id: 1,
        title: 'title',
        body: 'body',
      },
      showComments: true,
      onValueChange: () => {},
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
