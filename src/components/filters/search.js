import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'react-md';

const Search = ({ value, onValueChange }) => {
  const onChange = v => onValueChange(v);

  return (
    <TextField
      id="search"
      label="Search"
      defaultValue={value}
      lineDirection="center"
      onChange={onChange}
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
};

export default Search;
