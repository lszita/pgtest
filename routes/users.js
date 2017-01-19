var express = require('express');
var router = express.Router();

var glob = require('../glob');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(glob.foo);
  res.send('respond with a resource');
});

module.exports = router;
