import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

import "./components/TodoComponents/Todo.scss";
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.list = [{ task: "Add another item", id: 0, completed: false }];
    this.count = 1;
    this.delete = this.delete.bind(this);
    this.done = this.done.bind(this);
    this.edit = this.edit.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value, input: event.target.value });
  }
  delete(event) {
    event.target.parentNode.classList.toggle("hidden");
    event.target.parentNode.classList.toggle("todo");
  }
  done(event) {
    const listItem = this.list.find(
      item => item.id == event.target.parentNode.id
    );

    if (listItem.completed === true) {
      listItem.completed = false;
      event.target.textContent = "Done";
    } else {
      listItem.completed = true;
      event.target.textContent = "Undo";
    }
    event.target.parentNode.children[3].classList.toggle("hidden");
    event.target.parentNode.children[4].classList.toggle("hidden");
    event.target.parentNode.children[1].classList.toggle("done");
    event.target.blur();
    // event.target.classList.toggle("green");
    // event.target.classList.toggle("yellow");
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.input !== "") {
      this.list.push({
        task: this.state.task,
        id: this.count,
        completed: false
      });
      this.count++;
      this.setState({ input: "" });
    }
  }
  edit(event) {
    // console.log(event.target.parentNode.children);
    if (event.target.textContent !== "Save") {
      event.target.textContent = "Save";
    } else {
      event.target.textContent = "Edit";
    }
    event.target.parentNode.children[1].classList.toggle("hidden");
    event.target.parentNode.children[2].classList.toggle("hidden");
  }
  render() {
    return (
      <div className="container app">
        <div className="todoSheet">
        <h2>Welcome to your Todo App!</h2>
          <TodoList
            list={this.list}
            del={this.delete}
            done={this.done}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            edit={this.edit}
          />
          <TodoForm
            handleSubmit={this.handleSubmit}
            state={this.state}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
