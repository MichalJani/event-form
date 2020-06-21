import { isDate } from 'date-fns';

export const isEmailValid = (email) => {
  return /^(([^<>()\[\]\\.,;:!$=+^&'#%/\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

export const validateText = (name, value) => {
  const errors = {};
  const trimmedValue = value.trim()

  if(name === 'firstName' || name === 'lastName') {
    if(trimmedValue.length < 1) {
      errors[name] = "Minimum 1 characters required";
    } else if(trimmedValue.length > 40) {
      errors[name] = "Maximum 40 characters allowed";
    } else {
      errors[name] = '';
    }
  }

  if(name === 'email') {
    if(!isEmailValid(trimmedValue)) {
      errors.email = "Please input valid email";
    } else {
      errors.email = '';
    }
  }

  return errors
}

export const validateDate = (date) => {
  const errors = {}

  if(!isDate(date)) {
    errors.date = "Please select a valid date";
  } else {
    errors.date = '';
  }

  return errors
}
