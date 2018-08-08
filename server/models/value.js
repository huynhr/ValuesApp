module.exports = (sequelize, DataTypes) => {
  const Value = sequelize.define('value', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }, 
    description: {
      type: DataTypes.STRING
    }
  });

  Value.associate = function (models) {
    Value.belongsToMany(models.User, {
      through: 'UserValue',
      foreignKey: 'valueId'
    });
  };

  return Value;
};