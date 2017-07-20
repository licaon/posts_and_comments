import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Comment from 'src/components/comments/comment';

describe('Comment component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Comment
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly with props', (done) => {
    const component = createComponent({
      comment: {
        name: 'name',
        body: 'body',
      },
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
