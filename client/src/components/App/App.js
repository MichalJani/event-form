import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import { store } from '../../store';
import { AlertBarConnected } from '../AlertBar';
import { EventFormConnected } from '../EventForm';

const useStyles = makeStyles(() => ({
  app: {
    paddingTop: '100px'
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.app}>
        <AlertBarConnected />
        <EventFormConnected />
      </div>
    </Provider>
  );
}

