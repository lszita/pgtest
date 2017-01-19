const pgp = require('pg-promise')();

const url = process.env.DATABASE_URL;

module.exports.connection = function(){
    if(!this.connection)
        this.connection = pgp(url);
    return this.connection;
}();