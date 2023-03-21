'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HW11_development extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HW11_development.init({
    title: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HW11_development',
  });
  return HW11_development;
};