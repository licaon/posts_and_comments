import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'react-md';

import 'src/styles/components/basic/loading.scss';

const Loading = ({ id }) => <CircularProgress centered key="progress" className="loader" id={id} />;


Loading.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Loading;
