const auth = require('http-auth');

const { STATUS_USERNAME, STATUS_PASSWORD } = process.env;

const authService = {
  checkBasicCreds(user, pass, callback) {
    return callback(user === STATUS_USERNAME && pass === STATUS_PASSWORD);
  },
  basic() {
    return auth.connect(auth.basic(
      { realm: 'Monitor Area' },
      authService.checkBasicCreds,
    ));
  },
};

module.exports = authService;
