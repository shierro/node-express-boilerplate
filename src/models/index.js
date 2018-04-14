const Sequelize = require('sequelize');

const {
  DB,
  DB_USER,
  DB_PASSWORD,
  DB_LOGGING,
  DB_MAX_POOL,
} = process.env;

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  pool: {
    max: DB_MAX_POOL,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false,
  logging: DB_LOGGING === 'true',
});

const ProductCodes = require('./ProductCodes')(sequelize, Sequelize);

module.exports = {
  ProductCodes,
};
