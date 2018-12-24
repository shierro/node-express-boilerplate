const express = require('express');
const healthcheck = require('express-healthcheck');
const versionCheck = require('version-healthcheck');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const ErrorController = require('./controllers/ErrorController');
const authService = require('./services/authService');

const basicAuth = authService.basic();

module.exports = (app) => {
  const router = express.Router();
  /* APIs */
  app.use('/api', router);

  /* Status */
  app.use('/healthcheck', basicAuth, healthcheck());
  app.get('/version', basicAuth, versionCheck);

  /* OpenAPI SPECS */
  app.use(
    '/specs', [
      basicAuth,
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
