/** 
  * According to FreeCodeCamp.org: 
  * "App.js is the file for the App component which is the main component in
  * React which acts as a container for all other components."
 */
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
