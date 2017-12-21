require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const routes = require('./routes');
const logger = require('./utils/logger');

const app = express();
app.server = http.createServer(app);

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('morgan')('short', { stream: logger.logStream }));

routes(app);

app.server.listen(process.env.PORT || 8080, () => {
  logger.info(`ENV[${process.env.NODE_ENV}] Started on port ${app.server.address().port}`);
});

module.exports = app;
