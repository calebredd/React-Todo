import React from "react";

import "./Todo.scss";

export default function TodoForm(props) {
  const { handleSubmit, state, handleChange } = props;
  return (
    <form className="newItem" onSubmit={handleSubmit}>
      <input
        className="input"
        type="input"
        name="item"
        autoComplete="off"
        placeholder="New Todo"
        value={state.input}
        onChange={handleChange}
      ></input>
      <button type="submit">Add Item</button>
    </form>
  );
}
