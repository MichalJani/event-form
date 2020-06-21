const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../server');
const {
  testEvent,
  testEventIncomplete,
  testEventInvalid
} = require('../testUtils/fixtures');

chai.use(chaiHttp);
chai.should();

const apiEventRoute = '/api/event';

describe('POST /api/event', () => {
  it('Should save a valid event', done => {
    chai
      .request(app)
      .post(apiEventRoute)
      .send(testEvent)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('msg');
        res.body.event.should.have.property('firstName');
        res.body.event.should.have.property('lastName');
        res.body.event.should.have.property('email');
        res.body.event.should.have.property('date');
        res.body.event.should.have.property('_id');
        done();
      });
  });

  it('Should respond with errors on missing values', done => {
    chai
      .request(app)
      .post(apiEventRoute)
      .send(testEventIncomplete)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.have.property('param').eql('firstName');
        res.body.errors[1].should.have.property('param').eql('lastName');
        res.body.errors[2].should.have.property('param').eql('email');
        res.body.errors[3].should.have.property('param').eql('date');
        done();
      });
  });

  it('Should respond with errors on invalid email and date', done => {
    chai
      .request(app)
      .post(apiEventRoute)
      .send(testEventInvalid)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.errors.should.be.a('array');
        res.body.errors[0].should.have.property('param').eql('email');
        res.body.errors[1].should.have.property('param').eql('date');
        done();
      });
  });
});
