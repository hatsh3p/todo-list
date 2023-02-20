import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const DisplayTodoLists = () => {

    const [todoLists, setTodoLists] = useState([]);

    const deleteTodoList = async (id) => {
        try {
            const deleteTodoList = await fetch(`http://localhost:3000/lists/id/${id}`, {
                method: "DELETE"
            });
            setTodoLists(todoLists.filter(todoList => todoList.id !== id));
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
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoLists.map(todoList =>
                        <tr key={todoList.id}>
                            <td><button className="btn btn-primary">{todoList.name}</button></td>
                            <td><ListTodoList todoList={todoList} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodoList(todoList.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default DisplayTodoLists;
