import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Comments from 'src/components/comments/comments';

describe('Comments component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Comments
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly without comments', (done) => {
    const component = createComponent({
      comments: undefined,
      postId: 1,
    });

    expect(component).toMatchSnapshot();
    done();
  });
  it('should render component correctly with comments', (done) => {
    const component = createComponent({
      comments: [{
        id: 1,
        name: 'name',
        body: 'body',
      }],
      postId: 1,
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
