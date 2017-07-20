import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import UserFilter from 'src/components/filters/user-filter';

describe('UserFilter component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <UserFilter
        {...props}
      />);
    return toJson(wrapper);
  };
  it('should render component correctly', (done) => {
    const component = createComponent({
      users: ['1'],
      value: '1',
      onValueChange: () => {},
    });

    expect(component).toMatchSnapshot();
    done();
  });
  it('should render component correctly without users', (done) => {
    const component = createComponent({
      onValueChange: () => {},
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
