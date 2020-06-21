import { connect } from 'react-redux';
import { EventForm } from './EventForm';
import { setAlert } from '../../actions/alert';
import { addEvent } from '../../actions/event';

export const EventFormConnected = connect(
  null, { setAlert, addEvent }
)(EventForm);
