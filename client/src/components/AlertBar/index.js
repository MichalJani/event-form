import { connect } from 'react-redux';
import { AlertBar } from './AlertBar';

const mapStateToProps = state => ({
  alerts: state.alert
});

export const AlertBarConnected = connect(mapStateToProps)(AlertBar);
