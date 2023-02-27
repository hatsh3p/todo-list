/** 
 * index.js
 * 
 * index.js is the first file that runs. Think of it as main.
 * 
 * Dependencies: 
 *      - express
 *      - cors 
 *      - db
 */

const port = 3000;
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server has started on port ${port}.`);
});

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
 * Creates and adds a TodoItem to a specific list.
 */
app.post("/lists/id/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const { description } = req.body;
        const newTodoItem = await pool.query("INSERT INTO Items (list_id, description) VALUES($1, $2)", [list_id, description]);
        res.json("Added new TodoItem!");
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
 * Get all TodoTtems.
 */
app.get("/items", async (req, res) => {
    try {
        const items = await pool.query("SELECT * FROM items");
        res.json(items.rows);
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
app.put("/items/done/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateItem = await pool.query("UPDATE Items SET completed = true WHERE id = $1", [id]);
        res.json("TodoItem was marked done!");
    } catch (err) {
        console.error(err.message);
    }
})

/**
 * Updates a TodoItem description.
 */
app.put("/items/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateItem = await pool.query("UPDATE Items SET description = $1 WHERE id = $2", [description, id]);
        res.json("TodoItem description was updated!");
    } catch (err) {
        console.error(err.message);
    }
})

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
app.delete("/items/id/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodoItem = await pool.query("DELETE FROM items WHERE id = $1", [
            id
        ]);
        res.json("TodoItem was deleted!");
    } catch (err) {
        console.log(err.message);
    }
})

/**
 * Deletes a TodoList.
 */
app.delete("/lists/id/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const deleteTodoItems = await pool.query("DELETE FROM Items where list_id = $1", [list_id]);
        const deleteTodoList = await pool.query("DELETE FROM lists WHERE id = $1", [list_id]);
        res.json("TodoItem was deleted!");
    } catch (err) {
        console.log(err.message);
    }
})
