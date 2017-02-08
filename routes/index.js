var express = require('express');
var router = express.Router();
const db = require('../db');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.connection.one('select now() as time').then((row) => {
    res.render('index', { title: 'Express', time :  row.time });
  }).catch((error) => {
    res.render('index', { title: 'Express', message :  JSON.stringify(error) });
  });
});


router.get('/app', (req,res,next) => {
  db.connection.one('select now() as time').then((row) => {
    res.render('app', { title: 'App', time :  row.time, user: JSON.stringify(req.user) });
  }).catch((error) => {
    res.render('index', { title: 'Express', message :  JSON.stringify(error) });
  });
});

module.exports = router;
