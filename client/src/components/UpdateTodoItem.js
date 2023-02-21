import e from "cors";
import React, { Fragment, useEffect, useState } from "react";

const UpdateTodoItem = ({ todo }) => {
    const [isCompleted, setIsCompleted] = useState(todo);

    const updateIsCompleted = async () => {
        try {
            const body = { isCompleted };
            const response = await fetch(`http://localhost:3000/items/id/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.reload(false);
            //window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        setIsCompleted();
    }, []);

    return (
        <Fragment>
            <button className="btn btn-secondary" onClick={() => updateIsCompleted(todo)}>{String(todo.completed)}</button>
        </Fragment>
    );
};

export default UpdateTodoItem;
