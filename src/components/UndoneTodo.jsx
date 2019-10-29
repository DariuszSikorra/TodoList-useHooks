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
        {props.item.discription}, perform until: {props.item.date}{" "}
      </span>
      <button onClick={() => makeDoneTodo(props.item)}>Done!</button>{" "}
      <button onClick={() => deleteTodo(props.item)}>Delete</button>
    </li>
  );
};

export default UndoneTodo;
