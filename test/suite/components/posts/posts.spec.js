import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Posts from 'src/components/posts/posts';

describe('Posts component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Posts
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly without posts', (done) => {
    const component = createComponent();

    expect(component).toMatchSnapshot();
    done();
  });
  it('should render component correctly with posts', (done) => {
    const component = createComponent({
      posts: [
        {
          id: 1,
        },
      ],
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
