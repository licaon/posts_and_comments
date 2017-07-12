import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/app';

function renderComponent() {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container);
}

renderComponent();
