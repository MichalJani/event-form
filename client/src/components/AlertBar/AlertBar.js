import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  alert: {
    width: '300px'
  }
}));

export const AlertBar = ({ alerts }) => {
  const classes = useStyles();

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <Snackbar
        key={alert.id}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        className={classes.alertBar}
        open
      >
        <MuiAlert
          severity={alert.alertType}
          className={classes.alert}
          elevation={0}
          variant='filled'
        >
          {alert.msg}
        </MuiAlert>
      </Snackbar>
    ))
  );
};

AlertBar.propTypes = {
  alerts: PropTypes.array.isRequired
};
