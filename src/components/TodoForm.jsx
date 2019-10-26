import React from "react";

const TodoForm = props => {
  return (
    <div>
      <label>
        <p>
          <span>Podaj opis zadania: </span>
          <input
            type="text"
            placeholder="Tu wpisz tekst..."
            value={props.state.todoForm.discription}
            onChange={e =>
              props.dispatch({
                type: "ADD_DISCRIPTION",
                payload: e.currentTarget.value
              })
            }
          />
        </p>
        <p>
          <span>Data deadline'u: </span>
          <input
            type="date"
            value={props.state.todoForm.date}
            onChange={e =>
              props.dispatch({
                type: "ADD_DATE",
                payload: e.currentTarget.value
              })
            }
          />
        </p>
        <p>
          <span>Priorytet: </span>
          <input
            type="checkbox"
            checked={props.state.todoForm.important}
            onChange={e =>
              props.dispatch({
                type: "ADD_IMPORTANT",
                payload: e.currentTarget.checked
              })
            }
          />
        </p>
        <p>
          <button
            onClick={() =>
              props.dispatch({
                type: "ADD_TODO",
                payload: props.state.todoForm
              })
              // console.log(props.state.todoForm)
            }
          >
            Dodaj
          </button>
        </p>
      </label>
    </div>
  );
};

export default TodoForm;
