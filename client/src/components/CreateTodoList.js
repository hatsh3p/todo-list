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
            <h1 className="text-center mt-5">Todo App</h1>
            <h5 className="mt-5 text-center">Create New List</h5>
            <form className="mt-2" onSubmit={onSubmitForm}>
                <div class="row">
                    <div class="col">
                        <input
                            type="text"
                            placeholder="list"
                            className="form-control"
                            value={listName}
                            onChange={e => setListName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default CreateTodoList;
