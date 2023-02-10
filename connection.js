// Connection to postgres.
const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "bilbo",
    database: "todo"
})

module.exports = client
