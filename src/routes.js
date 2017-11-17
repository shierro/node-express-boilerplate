const express = require('express');
const ErrorController = require('./controllers/ErrorController');
const auth = require('http-auth');
const statusMonitor = require('express-status-monitor')({ path: '' });
const healthcheck = require('express-healthcheck');
const versionCheck = require('version-healthcheck');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

const basic = auth.basic(
  { realm: 'Monitor Area' },
  (user, pass, callback) =>
    callback(user === process.env.STATUS_USERNAME && pass === process.env.STATUS_PASSWORD),
);

module.exports = (app) => {
  const router = express.Router();
  /* APIs */
  app.use('/api', router);

  /* Status */
  app.use('/healthcheck', auth.connect(basic), healthcheck());
  app.get('/version', auth.connect(basic), versionCheck);
  app.use(statusMonitor.middleware);
  app.get('/status', auth.connect(basic), statusMonitor.pageRoute);

  /* OpenAPI SPECS */
  app.use(
    '/specs', [
      auth.connect(basic),
      swaggerUi.serve,
    ],
    swaggerUi.setup(swaggerDocument, true, {
      showRequestHeaders: true,
    }),
  );

  /* Error Handling */
  app.use(ErrorController.error404);
  app.use(ErrorController.generalError);
};
