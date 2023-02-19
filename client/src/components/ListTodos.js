import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodoLists, setTodos] = useState([]);

    const getTodoLists = async () => {
        try {
            const response = await (fetch("http://localhost:3000/lists"));
            const jsonData = await response.json();

            setTodoLists(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    // NEED TO UPDATE FOR MULTIPLE LISTS
    /*
    const getTodos = async () => {
        try {
            const response = await (fetch("http://localhost:3000/todos"));
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }
    
    // Delete todo function.

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: "DELETE"
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    }
    */
    useEffect(() => {
        //getTodos();
        getTodoLists();
    }, []); /* Adding [] ensures that only one request is made. */

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo =>
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger"
                            >Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
