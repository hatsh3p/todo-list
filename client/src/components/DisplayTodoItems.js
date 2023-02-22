import React, { Fragment, useEffect, useState } from "react";
import UpdateTodoItem from "./UpdateTodoItem";
import EditTodoItem from "./EditTodoItem";

const DisplayTodoItems = () => {

    const [todoItems, setTodoItems] = useState([]);

    const deleteTodoItem = async (id) => {
        try {
            const deleteTodoItem = await fetch(`http://localhost:3000/items/id/${id}`, {
                method: "DELETE"
            });
            setTodoItems(todoItems.filter(todoItem => todoItem.id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    const getTodoItems = async () => {
        try {
            const response = await (fetch("http://localhost:3000/items"));
            const jsonData = await response.json();
            setTodoItems(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTodoItems();
    }, []); /* Adding [] ensures that only one request is made. */

    return (
        <Fragment>
            {" "}
            <h3 className="mt-5 text-center">Items</h3>
            <table className="table mt-2 text-center">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>List</th>
                        <th>Status </th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todoItems.map(todoItem =>
                        <tr key={todoItem.id}>
                            <td>{todoItem.description}</td>
                            <td>{todoItem.list_id}</td>
                            <td><UpdateTodoItem todo={todoItem} /></td>
                            <td><EditTodoItem todo={todoItem} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodoItem(todoItem.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </Fragment>
    );
};

export default DisplayTodoItems;
