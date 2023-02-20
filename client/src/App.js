import React, { Fragment } from "react";
import './App.css';

// Components //
import CreateTodoList from "./components/CreateTodoList";
import CreateTodoItem from "./components/CreateTodoItem";
import DisplayTodoLists from "./components/DisplayTodoLists";
import DisplayTodoItems from "./components/DisplayTodoItems";

function App() {
  return <Fragment>
    <div className="container">
      <CreateTodoList />
      <CreateTodoItem />
      <DisplayTodoLists />
      <DisplayTodoItems />
    </div>
  </Fragment>;
}

export default App;
