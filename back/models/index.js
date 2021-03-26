const Sequelize = require('sequelize');

// 기본설정
const env = process.env.NODE_ENV || 'development';

// config config.json에서 [env] 기본설정 development를 가지고옴
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config)

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
