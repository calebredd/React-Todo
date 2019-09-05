// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import "./Todo.scss";

export default function List(props) {
  const { list, del, done, edit } = props;
  return (
    <div className="list">
      {list.map(todo => (
        <div className="todo" key={todo.id} id={todo.id}>
          <button className="done-btn gray" onClick={done}>
            Done
          </button>
          <div className="todoItem" id={"item" + todo.id}>
            {todo.task}
          </div>
          <input
            className="hidden"
            type="input"
            value={todo.task}
            id={"edit" + todo.id}
            name="edit"
            autoComplete="off"
            onChange={event => event.target.value}
          ></input>
          <button className="gray" onClick={edit}>
            Edit
          </button>
          <span className="delete-btn hidden" onClick={del}>
            X
          </span>
        </div>
      ))}
    </div>
  );
}
