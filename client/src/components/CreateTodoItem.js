import React, { Fragment, useState } from "react";

const CreateTodoItem = () => {
    const [itemName, setItemName] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { name: itemName };
            /* fetch() makes a GET request by default. */
            const response = await fetch("http://localhost:3000/lists/id/:list_id", {
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
            <h5 className="mt-5 text-center">Add to Existing List</h5>
            <form className="mt-2" onSubmit={onSubmitForm}>
                <div class="row">
                    <div class="col">
                        <input
                            type="text"
                            placeholder="item"
                            className="form-control"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)}
                        />
                    </div>
                    <div class="col">
                        <input
                            type="text"
                            placeholder="list name"
                            className="form-control"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)}
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

export default CreateTodoItem;
