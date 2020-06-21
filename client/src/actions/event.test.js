import {
  testStore,
  testEvent,
  testInitialEvent
} from '../utils/testUtils';
import { addEvent } from './event';

describe('addEvent action creator', () => {
  let store;
  const initialState = {};

  beforeEach(() => {
    store = testStore(initialState);
  });

  test('updates event state correctly on unsuccessful addEvent', () => {
    store.dispatch(addEvent(testEvent))
    const newState = store.getState()

    expect(newState.event).toEqual(testInitialEvent);
  });
});

