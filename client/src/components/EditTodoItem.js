/** 
  * EditTodoItem.js
  * 
  * Edits a TodoItem description in a modal.
  * This code is not working as intended.
 */

import React, { Fragment, useEffect, useState, } from "react";

const EditTodoItem = ({ todo }) => {
    const [description, setDescription] = useState(todo);

    const updateDescription = async () => {
        try {
            const body = { description };
            const response = await fetch(`http://localhost:3000/items/update/${todo.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.reload(false);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        setDescription();
    }, []);

    const closeModal = async () => {
        this.setState({
            modalIsOpen: false
        }, () => {
            this.props.resetInputData();
        });
    }

    return (
        <Fragment>
            <button
                type="button"
                class="btn btn-warning"
                data-toggle="modal"
                data-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>

            {/* 
        id = id10
      */}
            <div
                class="modal"
                id={`id${todo.todo_id}`}
                onClick={() => setDescription(todo.description)}
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div class="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={todo.description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-warning"
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodoItem;
