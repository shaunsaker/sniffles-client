import { combineReducers } from 'redux';

import appState from './appState';
import deviceLogs from './deviceLogs';
import devices from './devices';
import user from './user';

const reducers = combineReducers({
  appState,
  deviceLogs,
  devices,
  user,
});

export default reducers;
