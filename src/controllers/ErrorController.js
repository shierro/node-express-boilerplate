const logger = require('../utils/logger');

const error404 = (req, res, next) => {
  next({ status: 404, message: 'Not Found' });
};

/* istanbul ignore next */
/* eslint no-unused-vars: 0 */
const generalError = (err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message || 'Server Error',
  };

  logger.error(`Sending ${error.status} response:`, req.path, err);
  res.status(error.status).json(error);
};

module.exports = {
  error404,
  generalError,
};
