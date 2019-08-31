import React from "react";
import "./Todo.scss";

export default function List(props) {
  const list = props.list;
  const del = props.delete;
  const done = props.done;
  return (
    <div>
      {list.map(todo => (
        <div className="todo" key={todo.id} id={todo.id}>
          <button className="done-btn green" onClick={done}>
            Done
          </button>
          <div className="todoItem" id={"span" + todo.id}>
            {todo.task}{" "}
          </div>
          <span className="delete-btn hidden" onClick={del}>
            X
          </span>
        </div>
      ))}
    </div>
  );
}
