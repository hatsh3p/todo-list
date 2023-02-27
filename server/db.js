/** 
 * db.js
 * 
 * This code creates a new pool with the following configuration.
 * pool comes from "connection pool" which allows us to connect to the database
 * and make requests.
 * 
 * Dependencies: 
 *      - pg (postgres)
 */

const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: "todos"
});

module.exports = pool;
