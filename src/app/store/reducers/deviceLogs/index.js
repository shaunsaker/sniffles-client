import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_DEVICE_LOGS':
      newState = cloneObject(state);
      newState[payload.deviceId] = payload.data;
      return newState;

    default:
      return state;
  }
}
