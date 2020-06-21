import { ADD_EVENT } from '../actions/types';

const initialState = {
  event: null
};

export const event = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_EVENT:
      return {
        ...state,
        event: payload
      };
    default:
      return state;
  }
};
