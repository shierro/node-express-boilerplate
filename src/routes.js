const express = require('express');
const ErrorController = require('./controllers/ErrorController');
const statusMonitor = require('express-status-monitor')({ path: '' });
const healthcheck = require('express-healthcheck');
const versionCheck = require('version-healthcheck');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const authService = require('./services/authService');

module.exports = (app) => {
  const router = express.Router();
  /* APIs */
  app.use('/api', router);

  /* Status */
  app.use('/healthcheck', authService.basic, healthcheck());
  app.get('/version', authService.basic, versionCheck);
  app.use(statusMonitor.middleware);
  app.get('/status', authService.basic, statusMonitor.pageRoute);

  /* OpenAPI SPECS */
  app.use(
    '/specs', [
      authService.basic,
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
