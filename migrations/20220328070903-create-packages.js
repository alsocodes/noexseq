'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      has_coodinates: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      max_guests: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      has_guest_book: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      max_photo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_video: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      has_present: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      live_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      has_countdown: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      has_stories: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      has_quotes: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    await queryInterface.dropTable('packages');
  }
};