import { cloneObject } from 'js-simple-utils';

import initialState from './initialState';

export default function reducer(state = initialState, action = {}) {
  let newState;
  const { payload } = cloneObject(action);

  switch (action.type) {
    case 'SET_DEVICES':
      newState = cloneObject(state);
      newState = payload.data;
      return newState;

    default:
      return state;
  }
}
