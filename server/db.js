const {Sequelize} = require('sequelize')


module.exports = new Sequelize(
  "shop", // Название БД
  "postgres", // Пользователь
  "ZAQ!2wsx", // ПАРОЛЬ
  {
    host:  'localhost',
    dialect: 'postgres',
  })