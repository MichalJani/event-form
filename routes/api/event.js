const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Event = require('../../models/Event');

router.post(
  '/',
  [
    check('firstName', 'First Name is required')
      .trim()
      .not()
      .isEmpty()
      .isString(),
    check('lastName', 'Last Name is required')
      .trim()
      .not()
      .isEmpty()
      .isString(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail(),
    check('date', 'Please choose a valid date').trim().isISO8601()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, email, date } = req.body;
    if(firstName)
      try {
        const newEvent = new Event({
          firstName,
          lastName,
          email,
          date
        });
        const event = await newEvent.save();

        res
          .status(201)
          .json({ msg: 'You have registered for an event!', event });
      } catch(err) {
        console.error(err.message);
        res.status(500).json({ errors: [{ msg: 'Server error' }] });
      }
  }
);

module.exports = router;
