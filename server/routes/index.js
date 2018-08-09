const express = require('express');
const router = express.Router();

const users = require('./users');

router.get('/', function(req, res, next) {
  res.send('Hello World! I got docker to work! This should capture my change.');
});

router.use('/users', users);
// router.use('/users', (req, res, next) => {
//   res.send('post request for users');
// });

module.exports = router;
