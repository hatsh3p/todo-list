const client = require('./connection.js')
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("Sever is now listening at port " + port);
})

client.connect();

// Get all items in todo list.
app.get('/todos', (req, res) => {
    client.query(`Select * from todos`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

// Get todo item by ID.
app.get('/todos/:id', (req, res) => {
    client.query(`Select * from todos where id=${req.params.id}`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

// Add a new todo item. Use Postman.
app.post('/todos', (req, res) => {
    const todos = req.body;
    let insertQuery = `insert into todos(id, item) 
                       values(${todos.id}, '${todos.item}')`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful.')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// Update a todo item.
app.put('/todos/:id', (req, res) => {
    let todos = req.body;
    let updateQuery = `update todos
                       set item = '${todos.item}'
                       where id = ${todos.id}`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// Delete a todo item.
app.delete('/todos/:id', (req, res) => {
    let insertQuery = `delete from todos where id=${req.params.id}`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

