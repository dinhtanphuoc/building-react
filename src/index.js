import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as actions from './actions';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import { routes } from './routes';
import { syncHistoryWithStore } from 'react-router-redux';
import { Root } from './container/Main';

const tracks = [
  {
    id: 1,
    title: 'Em của ngày hôm qua'
  },
  {
    id: 2,
    title: 'Cơn mưa ngang qua'
  }
];

const store = configureStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Root store={store} routes={routes} history={history} />
  , document.getElementById('root'));
registerServiceWorker();
