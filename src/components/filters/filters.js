import React from 'react';

import UserFilter from 'src/containers/filters/user-filter';
import Search from 'src/containers/filters/search';

const Filters = () => (
  <div className="md-cell">
    <UserFilter />
    <Search />
  </div>
);

export default Filters;
