
require('dotenv').config();

const {
  DB_USER_DEV, DB_PASSWORD_DEV, DB_NAME_DEV, DB_HOST_DEV, 
  DB_USER_TEST, DB_PASSWORD_TEST, DB_NAME_TEST, DB_HOST_TEST, 
  DB_USER_PROD, DB_PASSWORD_PROD, DB_NAME_PROD, DB_HOST_PROD, 
  DB_DIALECT
} = process.env;
module.exports = {
  development: {
    username: DB_USER_DEV,
    password: DB_PASSWORD_DEV,
    database: DB_NAME_DEV,
    host: DB_HOST_DEV,
    dialect: DB_DIALECT,
    logging: false,
    operatorsAlises: false,
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    define: {
      underscoredAll: true,
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    },
  },
  test: {
    username: DB_USER_TEST,
    password: DB_PASSWORD_TEST,
    database: DB_NAME_TEST,
    host: DB_HOST_TEST,
    dialect: DB_DIALECT
  },
  production: {
    username: DB_USER_PROD,
    password: DB_PASSWORD_PROD,
    database: DB_NAME_PROD,
    host: DB_HOST_PROD,
    dialect: DB_DIALECT
  }
}
