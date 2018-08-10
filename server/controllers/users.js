const models = require('../models');

module.exports.createUser = function createUser(req, res) {
  console.log(8390289, 'inside the UsersController')
  models.User.create({
    username: 'Huynh.R.K@gmail.com',
    firstName: 'Ray',
    lastName: 'Huynh',
    admin: true
  }).then((x) => {
    console.log(8908, x);
    res.send('user has been added!');
  }).catch((err) => {
    res.send(err);
  })
}
