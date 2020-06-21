import { combineReducers } from 'redux';
import { event } from './event';
import { alert } from './alert';

export const rootReducer = combineReducers({
  event,
  alert
});
