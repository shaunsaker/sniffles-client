import { combineReducers } from 'redux';

import appState from './appState';
import devices from './devices';
import user from './user';

const reducers = combineReducers({
  appState,
  devices,
  user,
});

export default reducers;
