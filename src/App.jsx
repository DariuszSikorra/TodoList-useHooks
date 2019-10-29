import React, { useReducer, useEffect, useRef } from "react";
import appReducer from "./reducers/appReducer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.scss";

import { initialTodoForm } from "./variables/variables";

export const AppContext = React.createContext();

const App = () => {
  const [appState, dispatch] = useReducer(appReducer, {
    todoForm: initialTodoForm,
    todoList: []
  });

  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      const raw = localStorage.getItem("data");
      dispatch({ type: "RESET", payload: JSON.parse(raw) });
      didRun.current = true;
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(appState));
  }, [appState]);

  const deleteTodo = item => {
    dispatch({ type: "DELETE_TODO", item });
  };

  const makeDoneTodo = item => {
    dispatch({ type: "MAKEDONE_TODO", item });
  };

  return (
    <AppContext.Provider
      value={{ appState, dispatch, deleteTodo, makeDoneTodo }}
    >
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
