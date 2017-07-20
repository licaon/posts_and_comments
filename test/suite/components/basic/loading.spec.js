import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loading from 'src/components/basic/loading';

describe('Loading component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Loading
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly with props', (done) => {
    const component = createComponent({ id: 1 });

    expect(component).toMatchSnapshot();
    done();
  });
});
