const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

module.exports = (app) => {
  const options = {
    showRequestHeaders: true,
  };

  app.use('/specs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, true, options));
};
