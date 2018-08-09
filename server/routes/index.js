const express = require('express');
const router = express.Router();

const users = require('./users');

router.get('/', function(req, res, next) {
  res.send('Hello World! I got docker to work! This should capture my change.');
});

router.use('/users', users);

module.exports = router;
