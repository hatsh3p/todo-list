const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "bilbo",
    host: "localhost",
    port: 5432,
    database: "todo_tutorial"
});

module.exports = pool;
