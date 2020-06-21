import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Container
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  initialFormData,
  initialErrors
} from '../../utils/fixtures';
import {
  validateText,
  validateDate
} from '../../utils/functions';

const useStyles = makeStyles(() => ({
  eventForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export const EventForm = ({ addEvent, setAlert }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({ ...initialFormData });
  const [formErrors, setFormErrors] = useState({ ...initialErrors })
  const { firstName, lastName, email, date } = formData;

  const handleDateChange = (date) => {
    validateDateField(date)
    setFormData({ ...formData, date: date });
  };

  const validateDateField = (date) => {
    const errors = validateDate(date);

    setFormErrors({ ...formErrors, date: errors.date })
  }

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if(validateForm()) {
      const trimmedFormData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        date
      }
      addEvent(trimmedFormData);
      setFormData(initialFormData);
    } else {
      setAlert('Please fill out the form correctly', 'error')
    }
  }

  const validateForm = () => {
    const { firstName, lastName, email, date } = formErrors

    return firstName === '' && lastName === '' && email === '' && date === ''
  }

  const validateField = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const errors = validateText(name, value)

    setFormErrors({ ...formErrors, [name]: errors[name] })
  };

  return (
    <form
      className={classes.eventForm}
      autoComplete="off"
    >
      <Container
        maxWidth="sm"
      >
        <Grid
          container
          alignContent='center'
          spacing={3}>
          <Grid item xs={12} >
            <div>First Name</div>
            <TextField
              helperText={formErrors.firstName}
              error={Boolean(formErrors.firstName)}
              value={firstName}
              onChange={handleChange}
              onBlur={validateField}
              variant="standard"
              margin="normal"
              name='firstName'
              data-testid='firstName'
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} >
            <div>Last Name</div>
            <TextField
              error={Boolean(formErrors.lastName)}
              helperText={formErrors.lastName}
              value={lastName}
              onChange={handleChange}
              onBlur={validateField}
              margin="normal"
              variant="standard"
              name='lastName'
              data-testid='lastName'
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} >
            <div>Email</div>
            <TextField
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
              value={email}
              onChange={handleChange}
              onBlur={validateField}
              name='email'
              variant="standard"
              margin="normal"
              data-testid='email'
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} >
            <div>Event's date</div>
            <MuiPickersUtilsProvider
              utils={DateFnsUtils}
            >
              <KeyboardDatePicker
                value={date}
                onChange={handleDateChange}
                helperText={formErrors.date}
                error={Boolean(formErrors.date)}
                name='date'
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                disableToolbar
                disablePast
                fullWidth
                required
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid
            item xs={12}
            className={classes.buttonContainer}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
              </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

EventForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired
};
