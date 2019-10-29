import React, { useContext } from "react";
import { AppContext } from "../App";

const DoneTodo = props => {
  const { deleteTodo } = useContext(AppContext);

  return (
    <li key={props.item.id} className="todoList__item todoList__item--done">
      <span className="item__text">
        {props.item.discription}, done: {props.item.doneDate}
      </span>
      <button onClick={() => deleteTodo(props.item)}>Delete</button>
    </li>
  );
};

export default DoneTodo;
