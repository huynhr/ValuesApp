const models = require('../models');

module.exports.createUser = function createUser(req, res) {
  console.log(8390289, 'inside the UsersController')
  models.User.create({
    username: 'Huynh.R.K@gmail.com',
    firstName: 'Ray',
    lastName: 'Huynh',
    admin: true
  }).then(() => {
    console.log(483902, 'created the user');
    res.send('user has been added!');
  });
}
