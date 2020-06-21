const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require('../server');
const { testEvent } = require('../testUtils/fixtures')

chai.use(chaiHttp);
chai.should();

const invalidRoute = '/api/events';

describe("Invalid route", () => {
  it("Should respond with 404 on invalid route", (done) => {
    chai.request(app)
      .post(invalidRoute)
      .send(testEvent)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
