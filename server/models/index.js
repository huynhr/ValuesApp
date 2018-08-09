const Sequelize = require('sequelize');

// const sequelize = new Sequelize('values', 'postgres', 'postgres', {
//   dialect: 'postgres'
// });

const sequelize = new Sequelize('values', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
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
