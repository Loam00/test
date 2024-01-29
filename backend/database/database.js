const mysql = require("mysql2");

const config = require("../config/config.json");

//piccolo appunto: mai pushare i file di configurazione nel repo (vulnerabilità credenziali)
const pool = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

module.exports = pool.promise();

