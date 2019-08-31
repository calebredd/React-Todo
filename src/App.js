import React from "react";
import List from "./components/TodoComponents/List";

import "./components/TodoComponents/Todo.scss";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "", input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.list = [{ task: "Organize Garage", id: 0, completed: false }];
    this.count = 1;
    this.delete = this.delete.bind(this);
    this.done = this.done.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value, input: event.target.value });
  }
  delete(event) {
    // console.log(event.target.parentNode.id);
    // console.log(this.list);
    // console.log(this.list.find(item => item.id == event.target.parentNode.id));
    // this.list.find(
    //   item => item.id == event.target.parentNode.id
    // ).completed = true;
    event.target.parentNode.classList.toggle("hidden");
    // console.log(event.target.parentNode.classList);
    // console.log(event.target.parentNode.className);
    // console.log(this.list.find(item => item.id == event.target.parentNode.id));
  }
  done(event) {
    // console.log(event.target);
    // console.log(this.list);
    // console.log(this.list.find(item => item.id == event.target.parentNode.id));
    this.list.find(
      item => item.id == event.target.parentNode.id
    ).completed = true;
    // event.target.parentNode.classList.toggle("done");
    event.target.parentNode.children[2].classList.toggle("hidden");
    event.target.parentNode.children[1].classList.toggle("done");
    event.target.blur();
    if (event.target.textContent == "Undo") {
      event.target.textContent = "Done";
      event.target.classList.toggle("green");
      event.target.classList.toggle("yellow");
    } else {
      event.target.textContent = "Undo";
      event.target.classList.toggle("green");
      event.target.classList.toggle("yellow");
    }
    // classList.toggle("done");
    // console.log(event.target.parentNode.classList);
    // console.log(event.target.parentNode.className);
    // console.log(this.list.find(item => item.id == event.target.parentNode.id));
  }
  handleSubmit(event) {
    event.preventDefault();
    this.list.push({
      task: this.state.task,
      id: this.count,
      completed: false
    });
    // console.log(this.state, this.list);
    this.count++;
    this.setState({ input: "" });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <List list={this.list} delete={this.delete} done={this.done} />
        <form onSubmit={this.handleSubmit}>
          <input
          className="input"
            type="input"
            name="item"
            autoComplete="off"
            placeholder="New Todo"
            value={this.state.input}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default App;
