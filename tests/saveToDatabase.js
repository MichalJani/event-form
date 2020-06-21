const assert = require('assert');
const mongoose = require('mongoose');

const { testEvent, testEventInvalid } = require('../testUtils/fixtures');

describe('Database Tests', () => {
  beforeEach(done => {
    mongoose.connect('mongodb://localhost/testDatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    done();
  });

  afterEach(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });

  describe('Test Database', () => {
    it('Should save new event to the test database', done => {
      testEvent.save().then(() => {
        assert(!testEvent.isNew);
        done();
      });
    });

    it('Should throw when trying to save incorrect format to the test database', done => {
      testEventInvalid.save(err => {
        if (err) {
          return done();
        }
        throw new Error('Should generate error!');
      });
    });
  });
});
