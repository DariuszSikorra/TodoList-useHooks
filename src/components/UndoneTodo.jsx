import React, { useContext } from "react";
import { AppContext } from "../App";

const UndoneTodo = props => {
  const { deleteTodo, makeDoneTodo } = useContext(AppContext);

  const styleImportant = {
    color: "red"
  };

  return (
    <li key={props.item.id} className="todoList__item todoList__item--undone">
      <span
        className="item__text"
        style={props.item.important ? styleImportant : undefined}
      >
        {props.item.discription}, wykonać do dnia: {props.item.date}{" "}
      </span>
      <button onClick={() => makeDoneTodo(props.item)}>Zrobione!</button>{" "}
      <button onClick={() => deleteTodo(props.item)}>Usuń</button>
    </li>
  );
};

export default UndoneTodo;
