import moxios from 'moxios'

import {
  testStore,
  testEvent,
  testInitialEvent
} from '../utils/testUtils';
import { addEvent } from './event';
import { api } from '../utils/api'

describe('addEvent action creator', () => {
  let store;
  const initialState = {};

  beforeEach(() => {
    store = testStore(initialState);
  });

  it('Should update event state correctly on successful addEvent', () => {
    store.dispatch(addEvent(testEvent))
    const newState = store.getState()

    expect(newState.event).toEqual(testInitialEvent);
  });
});

describe('addEvent request', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('Should update the store', () => {
    const store = testStore()

    moxios.withMock(() => {
      api.post('/event', testEvent)

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          event: testEvent
        })
      })

      return store.dispatch(addEvent(testEvent))
        .then(() => {
          const newState = store.getState();
          expect(newState.event).toBe(true);
        });
    });
  });
});

