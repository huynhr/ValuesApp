module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    }, 
    firstName: {
      type: DataTypes.STRING
    }, 
    lastName: {
      type: DataTypes.STRING
    }, 
    admin: {
      type: DataTypes.BOOLEAN
    }, 
    numValuesSent: {
      type: DataTypes.INTEGER
    }, 
    profilePicture: {
      type: DataTypes.STRING
    }, 
    numValues: {
      type: DataTypes.INTEGER
    }, 
  });

  User.associate = function (models) {
    User.belongsToMany(models.Value, {
      through: 'UserValue',
      foreignKey: 'userId'
    });
  };

  return User;
};