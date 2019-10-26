import React, { useReducer, useEffect } from "react";
import appReducer from "./reducers/appReducer";
import TodoForm from "./components/TodoForm";
import "./App.css";

import { initialTodoForm } from "./variables/variables";

const App = () => {
  const [appState, dispatch] = useReducer(appReducer, {
    todoForm: initialTodoForm,
    todoList: [],
    doneTodos: []
  });

  useEffect(() => {
    console.log(appState.doneTodos);
  });

  const deleteTodo = item => {
    dispatch({ type: "DELETE_TODO", item });
  };

  const makeDoneTodo = item => {
    dispatch({ type: "MAKEDONE_TODO", item });
  };

  return (
    <div className="App">
      <div>
        <span>TodoForm: </span>
        <TodoForm dispatch={dispatch} state={appState} />
      </div>
      <div>
        <span>Zadania do zrobienia:</span>
        <ul>
          {appState.todoList.map(item => (
            <li key={item.id}>
              <span>
                {item.id + 1}. {item.discription}, wykonać do dnia: {item.date}{" "}
              </span>
              <button onClick={() => makeDoneTodo(item)}>Zrobione!</button>{" "}
              <button onClick={() => deleteTodo(item)}>Usuń</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span>Zrobione zadań:</span>
        <ul>
          {appState.doneTodos.map(item => (
            <li key={item.id}>{item.id + 1}, {item.discription}, Wykonano: {item.doneDate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
