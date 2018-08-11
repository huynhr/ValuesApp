const express = require('express');
const router = express.Router();

const users = require('./users');

router.get('/', function(req, res, next) {
  res.send('Hello World! I got docker to work! This should capture my change.');
});

// router.get('/login', function(req, res, next) {
//   // res.redirect('/login');
//   res.send('redirect to login page')
// });

router.use('/users', users);
// router.use('/users', (req, res, next) => {
//   res.send('post request for users');
// });

module.exports = router;
