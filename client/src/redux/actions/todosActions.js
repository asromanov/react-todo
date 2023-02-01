import axios from 'axios';
import {
  ADD_TODOS, DELETE_TODOS, SET_TODOS, UPDATE_TODOS,
} from '../types';

export const setTodos = (newTodos) => ({ type: SET_TODOS, payload: newTodos });
export const addTodos = (oneTodo) => ({ type: ADD_TODOS, payload: oneTodo });
export const deleteTodos = (todoId) => ({ type: DELETE_TODOS, payload: todoId });
export const updateTodos = (todo) => ({ type: UPDATE_TODOS, payload: todo });

export const getTodos = () => (dispatch) => {
  axios.get('/todos')
    .then((res) => dispatch(setTodos(res.data)))
    .catch(() => dispatch(setTodos([])));
};

export const submitTodo = (input) => (dispatch) => {
  axios.post('/todos', { text: input })
    .then((res) => dispatch(addTodos(res.data)));
};

export const asyncDelete = (id) => (dispatch) => {
  axios.delete(`/todos/${id}`)
    .then(() => dispatch(deleteTodos(id)))
    .catch(console.log);
};

export const asyncEdit = (id, input) => (dispatch) => {
  axios.patch(`/todos/${id}`, { text: input })
    .then((res) => dispatch(updateTodos(res.data)))
    .catch(console.log);
};
