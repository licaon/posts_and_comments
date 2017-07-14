import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onValueChange }) => {
  const onChange = e => onValueChange(e.target.value);
  return (
    <div>
      <label htmlFor="searchInput">
        Search:
        <input id="searchInput" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onValueChange: PropTypes.func,
};

export default Search;
