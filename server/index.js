const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const pool = require("./db");
const { application } = require("express");

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// Display message on home page.
app.get("/", async (req, res) => {
    try {
        res.end("<html><body><h1>Welcome to TODO list</h1></body></html>");
    } catch (err) {
        console.error(err.message);
    }
})

// Get all items in a list by list_id.
app.get("/lists/id/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const items = await pool.query("SELECT * FROM items WHERE list_id = $1", [list_id]);
        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// Get an item by id.
app.get("/items/id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
        res.json(item.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// Get all items in a list by list_name.
app.get("/lists/name/:list_name", async (req, res) => {
    try {
        const { list_name } = req.params;
        console.log(list_name);
        const items = await pool.query("SELECT i.id, i.list_id, i.description, i.completed, i.list_id FROM items i JOIN lists l ON i.list_id = l.id WHERE l.name = $1", [list_name]);
        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
    }
})


// Update a todo.
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        );
        res.json("Todo was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

// Delete a todo.
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
            id
        ]);
        res.json("Todo was deleted!");
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});

