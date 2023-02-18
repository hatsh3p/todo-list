const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'todo_tutorial'
});

module.exports = pool;
