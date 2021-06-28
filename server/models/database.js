const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'bkzalo',
    connectionLimit: 100,
    waitForConnections: true
});
global.db = db;
module.exports = db;