const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Get request for /users');
});

router.post('/register', UserController.createUser);

module.exports = router;
