var express = require('express');
var router = express.Router();
var glob = require('../glob');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(glob.foo);
  res.render('index', { title: 'Express' });
});

module.exports = router;
