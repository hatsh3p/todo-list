import React, { Fragment, useEffect, useState } from "react";

const EditTodoItem = ({ todo }) => {
    const [description, setDescription] = useState(todo);

    const updateDescription = async () => {
        try {
            const body = { isCompleted: description };
            const response = await fetch(`http://localhost:3000/items/id/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        setDescription();
    }, []);

    return (
        <Fragment>
            <button className="btn btn-warning disabled" onClick={() => updateDescription(todo)}>Edit</button>
        </Fragment>
    );
};

export default EditTodoItem;
