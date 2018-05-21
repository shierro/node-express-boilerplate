require('dotenv-safe').config();
const SequelizeAuto = require('sequelize-auto');

const {
  DB,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  NODE_ENV,
} = process.env;

const auto = new SequelizeAuto(DB, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  port: DB_PORT,
  tables: ['product_codes'], // Indicate here tables to auto generate. leave blank if all
  camel: true,
  directory: 'src/models/generated',
});

/* istanbul ignore next */
if (NODE_ENV === 'development') {
  auto.run((err) => {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
  });
}
