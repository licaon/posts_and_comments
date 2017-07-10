import React from 'react';
import PropTypes from 'prop-types';

const App = ({ text }) => (
  <div>{text}</div>
);

App.defaultProps = {
  text: 'Initial structure',
};

App.propTypes = {
  text: PropTypes.string,
};

export default App;
