var mysql = require('mysql2');
var util = require('util');

//este código sale de npmjs.com
//buscar mysql Pooling connections

var pool = mysql.createPool({
    connectionLimit:10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

pool.query=util.promisify(pool.query);
module.exports=pool;