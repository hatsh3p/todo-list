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

/**
 * Displays a message on the home page.
 */
app.get("/", async (req, res) => {
    try {
        res.end("Welcome to TODO list");
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Creates a TodoList.
 */
app.post("/lists", async (req, res) => {
    try {
        const { name } = req.body;
        const newList = await pool.query("INSERT INTO Lists (name) VALUES($1) RETURNING *", [name]);
        res.json(newList.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Creates a TodoItem for a specific list.
 */
app.post("/lists/id/:list_id", async (req, res) => {
    try {
        const { description } = req.body;

    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Gets all of the TodoLists.
 */
app.get("/lists", async (req, res) => {
    try {
        const lists = await pool.query("SELECT * from lists");
        res.json(lists.rows);
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Get all TodoTtems in a TodoList by list_id.
 */
app.get("/lists/id/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const items = await pool.query("SELECT * FROM items WHERE list_id = $1", [list_id]);
        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Get all TodoItems in a TodoList by list_name.
 */
app.get("/lists/name/:list_name", async (req, res) => {
    try {
        const { list_name } = req.params;
        const items = await pool.query("SELECT i.id, i.list_id, i.description, i.completed, i.list_id FROM items i JOIN lists l ON i.list_id = l.id WHERE l.name = $1", [list_name]);
        res.json(items.rows);
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Updates a TodoItem and marks it as done.
 */

/**
 * Get a TodoItem by item id.
 */
app.get("/items/id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const item = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
        res.json(item.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Deletes a TodoItem.
 */

/**
 * Deletes a TodoList.
 */


/*
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
*/

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});
