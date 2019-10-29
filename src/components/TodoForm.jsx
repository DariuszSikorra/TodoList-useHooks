import React, { useContext } from "react";
import { AppContext } from "../App";

const TodoForm = () => {
  const { appState, dispatch } = useContext(AppContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: appState.todoForm
    });
  };

  return (
    <AppContext.Consumer>
      {() => (
        <div className="app__todoForm">
          <h2>Stwórz nowe zadanie: </h2>
          <form onSubmit={handleSubmit}>
            <span>Podaj opis zadania: </span>
            <br />
            <input
              type="text"
              placeholder="Tu wpisz tekst..."
              value={appState.todoForm.discription}
              min="8"
              required
              onChange={e =>
                dispatch({
                  type: "ADD_DISCRIPTION",
                  payload: e.currentTarget.value
                })
              }
            />
            <br />
            <span>Data deadline'u: </span>
            <br />
            <input
              type="date"
              value={appState.todoForm.date}
              onChange={e =>
                dispatch({
                  type: "ADD_DATE",
                  payload: e.currentTarget.value
                })
              }
            />
            <br />
            <span>Priorytet: </span>
            <input
              type="checkbox"
              checked={appState.todoForm.important}
              onChange={e =>
                dispatch({
                  type: "ADD_IMPORTANT",
                  payload: e.currentTarget.checked
                })
              }
            />
            <br />
            <button type="submit">Dodaj</button>
          </form>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default TodoForm;
