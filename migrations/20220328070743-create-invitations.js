'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invitations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bride_photo: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      bride_nick_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      bride_full_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      bride_parent: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      bride_address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      groom_photo: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      groom_nick_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      groom_full_name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      groom_parent: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      groom_address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      marriage_date: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      marriage_start_time: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      marriage_end_time: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      marriage_location: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      marriage_address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      reception_date: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      reception_start_time: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      reception_end_time: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      reception_location: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      reception_address: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      unduhmantu_date: {
        type: Sequelize.DATE
      },
      unduhmantu_start_time: {
        type: Sequelize.STRING
      },
      unduhmantu_end_time: {
        type: Sequelize.STRING
      },
      unduhmantu_location: {
        type: Sequelize.STRING
      },
      unduhmantu_address: {
        type: Sequelize.STRING
      },
      theme_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      gps_coordinates: {
        type: Sequelize.STRING
      },
      package_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      max_guests: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      has_guest_book: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      max_photo: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      max_video: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      has_present: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      live_until: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      has_countdown: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      has_stories: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      has_quotes: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('invitations');
  }
};