var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(83902, req.sessionID);
  res.send('Hello World! I got docker to work! This should capture my change.');
});

module.exports = router;
