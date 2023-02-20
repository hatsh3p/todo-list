import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
import DisplayTodoItems from "./DisplayTodoItems";

const DisplayTodoLists = () => {

    const [todoLists, setTodoLists] = useState([]);

    const deleteTodoList = async (id) => {
        try {
            const deleteTodoList = await fetch(`http://localhost:3000/lists/id/${id}`, {
                method: "DELETE"
            });
            setTodoLists(todoLists.filter(todoList => todoList.id !== id));
            window.location.reload(false); /* Not the best way to implement this but works */
        } catch (err) {
            console.log(err.message);
        }
    }
    const getTodoLists = async () => {
        try {
            const response = await (fetch("http://localhost:3000/lists"));
            const jsonData = await response.json();
            setTodoLists(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodoLists();
    }, []); /* Adding [] ensures that only one request is made. */

    return (
        <Fragment>
            {" "}
            <h3 className="mt-5 text-center">Lists</h3>
            <table className="table mt-2 text-center">
                <thead>
                    <tr>
                        <th>List</th>
                        <th>ID</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoLists.map(todoList =>
                        <tr key={todoList.id}>
                            <td><button className="btn btn-primary">{todoList.name}</button></td>
                            <td>{todoList.id}</td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodoList(todoList.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default DisplayTodoLists;
