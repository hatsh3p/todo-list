import React, { Fragment, useState } from "react";

const CreateTodoList = () => {
    const [listName, setListName] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { name: listName };
            /* fetch() makes a GET request by default. */
            const response = await fetch("http://localhost:3000/lists", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo Lists</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="create a new list"
                    className="form-control"
                    value={listName}
                    onChange={e => setListName(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default CreateTodoList;
