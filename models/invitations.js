'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invitations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  invitations.init({
    bride_photo: DataTypes.STRING,
    bride_nick_name: DataTypes.STRING,
    bride_full_name: DataTypes.STRING,
    bride_parent: DataTypes.STRING,
    bride_address: DataTypes.STRING,
    groom_photo: DataTypes.STRING,
    groom_nick_name: DataTypes.STRING,
    groom_full_name: DataTypes.STRING,
    groom_parent: DataTypes.STRING,
    groom_address: DataTypes.STRING,
    marriage_date: DataTypes.DATE,
    marriage_start_time: DataTypes.STRING,
    marriage_end_time: DataTypes.STRING,
    marriage_location: DataTypes.STRING,
    marriage_address: DataTypes.STRING,
    reception_date: DataTypes.DATE,
    reception_start_time: DataTypes.STRING,
    reception_end_time: DataTypes.STRING,
    reception_location: DataTypes.STRING,
    reception_address: DataTypes.STRING,
    unduhmantu_date: DataTypes.DATE,
    unduhmantu_start_time: DataTypes.STRING,
    unduhmantu_end_time: DataTypes.STRING,
    unduhmantu_location: DataTypes.STRING,
    unduhmantu_address: DataTypes.STRING,
    theme_id: DataTypes.INTEGER,
    gps_coordinates: DataTypes.STRING,
    package_id: DataTypes.INTEGER,
    max_guests: DataTypes.INTEGER,
    has_guest_book: DataTypes.BOOLEAN,
    max_photo: DataTypes.INTEGER,
    max_video: DataTypes.INTEGER,
    has_present: DataTypes.BOOLEAN,
    live_until: DataTypes.DATE,
    has_countdown: DataTypes.BOOLEAN,
    has_stories: DataTypes.BOOLEAN,
    has_quotes: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'invitations',
    paranoid: true
  });
  return invitations;
};