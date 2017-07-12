import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/app';
import { AppActions } from 'src/actions';

function renderComponent() {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);

  const { dispatch } = store;
  dispatch(AppActions.initApp());

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    container);
}

renderComponent();
