import { testStore } from '../utils/testUtils';
import { setAlert } from './alert';
import { SUCCESS, ERROR } from '../utils/fixtures';

describe('setAlert action creator', () => {
  let store;
  const initialState = {};

  beforeEach(() => {
    store = testStore(initialState);
  });

  test('updates alertType state correctly on successful addEvent', () => {
    store.dispatch(setAlert('Event created', SUCCESS));
    const newState = store.getState();

    expect(newState.alert[0].alertType).toEqual(SUCCESS);
  });

  test('updates alertType state correctly on unsuccessful addEvent', () => {
    store.dispatch(setAlert('Event not created', ERROR));
    const newState = store.getState();

    expect(newState.alert[0].alertType).toEqual(ERROR);
  });
});
