import {
  ADD_TODOS, DELETE_TODOS, SET_TODOS, UPDATE_TODOS,
} from '../types';

export default function todosReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS:
      return payload; // payload === allTodoss
    case ADD_TODOS:
      return [payload, ...state]; // payload === newTodo
    case DELETE_TODOS:
      return state.filter((todo) => todo.id !== payload); // payload === id
    case UPDATE_TODOS:
      return state.map((todo) => (todo.id === payload.id ? payload : todo)); // payload  updatedTodo
    default:
      return state;
  }
}
