
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from '../reducers';
import { middleware } from '../store';

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const testAlert = {
  alertType: "success",
  id: "48c24a4b-b57b-437c-ae92-3995ae010230",
  msg: "Event created"
}

export const testEvent = {
  firstName: 'Name',
  lastName: 'Surname',
  email: 'example@email.com',
  date: new Date()
}

export const testInitialEvent = {
  event: null
}
