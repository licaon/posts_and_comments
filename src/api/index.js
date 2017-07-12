import store from 'src/store';
import { HttpRequestActions } from 'src/actions';
import { v4 as uuid } from 'node-uuid';

const initRequest = req => (
  Object.assign({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }, req)
);

const requestTracker = [];
const requestId = {};

const processData = () => {
  while (requestTracker.length > 0 && requestId[requestTracker[0]].done) {
    store.dispatch(HttpRequestActions.doneLoadingData(requestTracker[0]));

    const { resolve, response } = requestId[requestTracker[0]];
    resolve(response);

    delete requestId[requestTracker[0]];
    requestTracker.shift();
  }
};

const fetchData = ({ url, body = {}, method = 'GET' }) => new Promise((resolve) => {
  const id = uuid();
  requestTracker.push(id);
  requestId[id] = {
    resolve,
    done: false,
  };

  const request = initRequest({ method, body });
  store.dispatch(HttpRequestActions.startLoadingData(id));

  fetch(url, request)
    .then(response => response.json())
    .then((response) => {
      requestId[id].done = true;
      requestId[id].response = response;
      processData();
    });
});

export default fetchData;
