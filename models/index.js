const walkSync = require('walk-sync');
const config = require('../config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db);
const db = {};
  
walkSync(`./models`, {
  globs: ['*.model.js'],
  ignore: ['index.js'],
}).forEach((file) => {
  const model = sequelize.import(`${file}`);
  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;