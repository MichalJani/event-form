import {
  ADD_EVENT,
  ADD_EVENT_ERROR
} from '../actions/types';

const initialState = {
  event: null,
  error: {}
};

export const event = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case ADD_EVENT:
      return {
        ...state,
        event: payload
      };
    case ADD_EVENT_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
