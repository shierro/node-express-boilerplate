const winston = require('winston');
require('winston-daily-rotate-file');

/* istanbul ignore next */
const logger = process.env.NODE_ENV !== 'test' ?
  new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level: process.env.LOG_LEVEL || 'debug',
        colorize: false,
        handleExceptions: true,
        humanReadableUnhandledException: true,
        json: process.env.NODE_ENV === 'production',
        stringify: process.env.NODE_ENV === 'production',
        timestamp: true,
      }),
      new (winston.transports.DailyRotateFile)({
        filename: '%DATE%.log',
        datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        dirname: 'logs',
      }),
    ],
  }) :
  {
    log: () => { },
    info: () => { },
    warn: () => { },
    error: () => { },
    debug: () => { },
  };

logger.logStream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;

