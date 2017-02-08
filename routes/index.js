var express = require('express');
var router = express.Router();
const db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.connection.one('select now() as timne').then((row) => {
    res.render('index', { title: 'Express', message :  JSON.stringify(row) });
  }).catch((error) => {
    res.render('index', { title: 'Express', message :  JSON.stringify(error) });
  });
});

module.exports = router;
