import React, { useReducer, useContext, useEffect, useRef } from "react";
import "./App.css";

const appReducer = (state, action) => {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    case "delete": {
      return state.filter(item => item.id !== action.payload);
    }
    case "completed": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
};

const Context = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(appReducer, []);

  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      const raw = localStorage.getItem("data");
      dispatch({ type: "reset", payload: JSON.parse(raw) });
      didRun.current = true;
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <h1>Todos app</h1>
        <button onClick={() => dispatch({ type: "add" })}>New todo</button>
        <br />
        <br />
        <TodosList items={state} />
      </div>
    </Context.Provider>
  );
};

const TodosList = ({ items }) => {
  return items.map(item => <TodoItem key={item.id} {...item} />);
};

const TodoItem = ({ id, completed, text }) => {
  const dispatch = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
};

export default App;
