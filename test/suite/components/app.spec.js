import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from 'src/components/app';

describe('App component', () => {
  const createComponent = (props) => {
    const wrapper = shallow(
      <App
        {...props}
      />);
    return toJson(wrapper);
  };

  it('should render component correctly', (done) => {
    const component = createComponent();

    expect(component).toMatchSnapshot();
    done();
  });

  it('should render component correctly with props', (done) => {
    const component = createComponent({
      text: 'new text',
    });

    expect(component).toMatchSnapshot();
    done();
  });
});
