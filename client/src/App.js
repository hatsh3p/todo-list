import React, { Fragment } from "react";
import './App.css';

// Components //
import CreateTodoList from "./components/CreateTodoList";
import ListTodos from "./components/ListTodos";

function App() {
  return <Fragment>
    <div className="container">
      <CreateTodoList />
      <ListTodos />
    </div>
  </Fragment>;
}

export default App;
