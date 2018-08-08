const Sequelize = require('sequelize');

const sequelize = new Sequelize('values', 'postgres', 'postgres', {
  dialect: 'postgres'
});

const models = {
  User: sequelize['import']('./user'),
  Value: sequelize['import']('./value')
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
