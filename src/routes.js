const express = require('express');
const ErrorController = require('./controllers/ErrorController');
const auth = require('http-auth');
const statusMonitor = require('express-status-monitor')({ path: '' });
const basic = auth.basic(
  { realm: 'Monitor Area' }, 
  (user, pass, callback) => callback(
    user === process.env.STATUS_USERNAME &&
    pass === process.env.STATUS_PASSWORD
  )
);

module.exports = (app) => {
  const router = express.Router();
  /* APIs */
  app.use('/api', router);

  /* Status */
  app.use('/healthcheck', auth.connect(basic), require('express-healthcheck')());
  app.get('/version', auth.connect(basic), require('version-healthcheck'));
  app.use(statusMonitor.middleware);
  app.get('/status', auth.connect(basic), statusMonitor.pageRoute);

  /* Error Handling */
  app.use(ErrorController.error404);
  app.use(ErrorController.generalError);
}
