import React from 'react';

import Filters from 'src/components/filters/filters';
import Posts from 'src/containers/posts/posts';

const App = () => (
  <div className="md-grid">
    <Filters />
    <Posts />
  </div>
);

export default App;
