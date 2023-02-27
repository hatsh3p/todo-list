/** 
  * CreateTodoItem.js
  * 
  * Creates a TodoItem and add it to a specific list.
  * 
 */

import React, { Fragment, useState } from "react";

const CreateTodoItem = () => {
    const [itemName, setItemName] = useState("");
    const [listId, setListId] = useState("");

    const onSubmitForm = async e => {
        try {
            const body = { description: itemName };
            /* fetch() makes a GET request by default. */
            const response = await fetch(`http://localhost:3000/lists/id/${listId}`, {
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
            <h5 className="mt-5 text-center">Add Item</h5>
            <form className="mt-2" onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            placeholder="item"
                            className="form-control"
                            value={itemName}
                            onChange={e => setItemName(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            placeholder="list id"
                            className="form-control"
                            value={listId}
                            onChange={e => setListId(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="btn btn-success">Add</button>
                    </div>
                </div>
            </form>
        </Fragment >
    );
};

export default CreateTodoItem;
