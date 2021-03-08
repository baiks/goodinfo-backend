'use strict';
module.exports = (sequelize, DataTypes) => {
  const bitcoin = sequelize.define('bitcoin', {
    value: DataTypes.INTEGER
  }, {});
  bitcoin.associate = function(models) {
    // associations can be defined here
  };
  return bitcoin;
};