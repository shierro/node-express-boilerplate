/* Add your custom functions here */

module.exports = (sequelize, Sequelize) => {
  const ProductCodes = require('./generated/product_codes')(sequelize, Sequelize);

  // ProductCodes.yourComplexFunction = (params, additionalComplexity) =>
  //   ProductCodes.find({ params }, {
  //     where: {
  //       additionalComplexity
  //     }
  //   });

  return ProductCodes;
};
