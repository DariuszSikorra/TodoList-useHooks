import React, { useContext } from "react";
import { AppContext } from "../App";
import UndoneTodo from "./UndoneTodo";
import DoneTodo from "./DoneTodo";

const TodoList = () => {
  const { appState } = useContext(AppContext);
  const undoneTodo = appState.todoList.filter(item => !item.done)
  const doneTodo = appState.todoList.filter(item => item.done)

  return (
    <AppContext.Consumer>
      {() => (
        <div className="app__todoList">
          <h2>Zadania do zrobienia:</h2>
          <ul>
            {undoneTodo.map( item =>
              <UndoneTodo item={item} />
              )}
          </ul>
          <h2>Zrobione zadania:</h2>
          <ul>
            {doneTodo.map(
              item =>  <DoneTodo item={item} />
            )}
          </ul>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default TodoList;
