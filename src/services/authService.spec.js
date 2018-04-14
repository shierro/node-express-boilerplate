const { expect } = require('chai');
const authService = require('./authService');

describe('src/services/authService.js', () => {
  it('should check basic creds & return error callback on wrong username', (done) => {
    authService.checkBasicCreds('WRONG_USER', 'WRONG_PASS', (result) => {
      expect(result).to.equal(false);
      done();
    });
  });
  it('should check basic creds & return error callback on wrong password', (done) => {
    authService.checkBasicCreds(process.env.STATUS_USERNAME, 'WRONG_PASS', (result) => {
      expect(result).to.equal(false);
      done();
    });
  });
  it('should return basic auth middleware function', () => {
    const middleware = authService.basic();
    expect(middleware).to.be.a('function');
  });
});
