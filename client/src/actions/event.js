import { api } from '../utils/api';
import { setAlert } from './alert';
import {
  ADD_EVENT,
  ADD_EVENT_ERROR
} from './types';
import {
  SUCCESS,
  ERROR
} from '../utils/fixtures'

export const addEvent = formData => async dispatch => {
  try {
    const res = await api.post('/event', formData);

    dispatch({
      type: ADD_EVENT,
      payload: res.data.event
    });

    dispatch(setAlert(res.data.msg, SUCCESS));
  } catch(err) {
    const errors = err.response.data.errors;

    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, ERROR)));
    }

    dispatch({
      type: ADD_EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
