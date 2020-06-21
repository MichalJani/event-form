import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
import { alert } from './alert';
import { testAlert } from '../utils/testUtils';

describe('Alert Reducer', () => {
  const initialState = [];

  it('Should return default state', () => {
    const newState = alert(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should return new state if receiving type', () => {
    const newState = alert(initialState, {
      type: SET_ALERT,
      payload: testAlert
    });
    expect(newState).toEqual([testAlert]);
  });

  it('Should return to initial state', () => {
    const newState = alert(initialState, {
      type: REMOVE_ALERT,
      payload: testAlert
    });
    const emptyState = alert(newState, {
      type: REMOVE_ALERT,
      payload: testAlert.id
    });
    expect(emptyState).toEqual(initialState);
  });
});
