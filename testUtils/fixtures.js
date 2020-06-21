const Event = require('../models/Event');

const testEvent = new Event({
  firstName: 'Name',
  lastName: 'Surname',
  email: 'example@email.com',
  date: new Date()
});

const testEventIncomplete = new Event({});

const testEventInvalid = new Event({
  firstName: 'Name',
  lastName: 'Surname',
  email: 'exampleemail.com',
  date: '23.04.2028'
});

module.exports = { testEvent, testEventIncomplete, testEventInvalid };
