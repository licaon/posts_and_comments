import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/components/app';

const container = document.createElement('div');
container.setAttribute('id', 'container');

document.body.appendChild(container);

// Render it to DOM
ReactDOM.render(
  <App />,
  container,
);
