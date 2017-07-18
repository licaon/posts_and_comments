import React from 'react';
import PropTypes from 'prop-types';
import { SelectField } from 'react-md';

const UserFilter = ({ value, users, onValueChange }) => {
  const onChange = v => onValueChange(v);

  return (
    <SelectField
      defaultValue={value}
      id="users"
      label="Users"
      menuItems={users}
      itemLabel="name"
      itemValue="id"
      onChange={onChange}
      className="md-full-width"
    />
  );
};

UserFilter.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  users: PropTypes.array,
  onValueChange: PropTypes.func,
};

export default UserFilter;
