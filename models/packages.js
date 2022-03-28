'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  packages.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    has_coodinates: DataTypes.BOOLEAN,
    max_guests: DataTypes.INTEGER,
    has_guest_book: DataTypes.BOOLEAN,
    max_photo: DataTypes.INTEGER,
    max_video: DataTypes.INTEGER,
    has_present: DataTypes.BOOLEAN,
    live_duration: DataTypes.INTEGER,
    has_countdown: DataTypes.BOOLEAN,
    has_stories: DataTypes.BOOLEAN,
    has_quotes: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'packages',
    paranoid: true
  });
  return packages;
};