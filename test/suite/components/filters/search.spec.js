import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Search from 'src/components/filters/search';

describe('Search component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Search
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly', (done) => {
    const component = createComponent({
      value: '1',
      onValueChange: () => {},
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
