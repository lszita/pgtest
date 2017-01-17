const pgp = require('pg-promise')()
      http = require('http');


const db = pgp(process.env.ELEPHANT_SQL);
const port = process.env.PORT || 5000;

http.createServer((req,res) => {
    
    db.one('select now() as theTimne').then((row) => {
        res.end(row);
    }).catch((error) => {
        res.end(error);
    });

}).listen(port);