const pgp = require('pg-promise')()
      http = require('http');


/*const db = pgp(process.env.ELEPHANT_SQL);
const port = process.env.PORT || 5000;

http.createServer((req,res) => {
    
    db.one('select now() as theTimne').then((row) => {
       // res.end(row);
       res.end('wat');
    }).catch((error) => {
        //res.end(error);
        res.end('wat2');
    });

}).listen(port);*/

const port = process.env.PORT || 5000;
http.createServer((req,res) => {}).listen(port);