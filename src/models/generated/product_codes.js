/* eslint-disable */
module.exports = (sequelize, DataTypes) =>
  sequelize.define('product_codes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    account_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'accounts',
        key: 'userId',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'product_codes',
  });
