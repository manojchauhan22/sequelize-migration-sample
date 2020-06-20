const walkSync = require('walk-sync');

module.exports = function getModels(sequelize) {
  const models = {};
  const paths = walkSync(`./models`, {
    globs: ['*.js'],
    ignore: ['index.js'],
  });

  paths.forEach((file) => {
    const model = sequelize.import(`${file}`);
    models[model.name] = model;
  });

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
  return models;
}
