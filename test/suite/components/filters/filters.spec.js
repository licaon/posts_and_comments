import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Filters from 'src/components/filters/filters';

describe('Filters component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <Filters
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly', (done) => {
    const component = createComponent();

    expect(component).toMatchSnapshot();
    done();
  });
});
