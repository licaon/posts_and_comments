import React from 'react';
import PropTypes from 'prop-types';

const UserFilter = ({ value, users, onValueChange }) => {
  const onChange = e => onValueChange(e.target.value);
  const userList = () => users.map(
    user => <option key={user.id} value={user.id}>{user.name}</option>,
  );
  return (
    <div>
      <label htmlFor="searchInput">
        Users:
        <select value={value} onChange={onChange}>
          <option value="">All</option>
          {userList()}
        </select>
      </label>
    </div>
  );
};

UserFilter.propTypes = {
  value: PropTypes.string,
  users: PropTypes.array,
  onValueChange: PropTypes.func,
};

export default UserFilter;
