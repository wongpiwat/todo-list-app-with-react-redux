import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <input onBlur={e => this.updateInput(e.target.value)} />
        <button
          className="add-todo"
          onClick={() => this.props.addTodo(this.state.input)}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

// This.props.addTodo(this.state.input) is adding input to addTodo's content. check it out on actions.js file.
// When click add todolist, then it run into todoList.js file.

export default connect(null, { addTodo })(AddTodo);
