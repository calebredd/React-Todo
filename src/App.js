import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.list = [
      { task: "Organize Garage", id: 1528817077286, completed: false }
    ];
    this.count = 1;
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.list.push({
      task: this.state.task,
      id: this.count,
      completed: false
    });
    event.target.value = "";
    // console.log(this.state, this.count, this.list);
    this.count++;
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        {this.list.map(todo => (
          <p key={todo.id}>{todo.task}</p>
        ))}
        {/* <p>{this.state.task}</p> */}
        <form onSubmit={this.handleSubmit}>
          <input
            type="input"
            name="item"
            placeholder="New Todo"
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add to List</button>
        </form>
      </div>
    );
  }
}

export default App;
