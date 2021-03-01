import { ADD_TODO } from "../actionTypes";

const defaultState = [];

// Add todolist operation.
const todoList = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id } = action.payload;
      return [...state, id];
    }
    default:
      return state;
  }
};

export default todoList;
