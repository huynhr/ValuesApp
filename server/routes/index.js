const express = require('express');
const router = express.Router();
const path = require('path');

const users = require('./users');

router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/dst/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  });
});

router.use('/users', users);

module.exports = router;
