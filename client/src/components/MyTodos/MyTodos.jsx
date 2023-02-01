import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getTodos } from '../../redux/actions/todosActions';
import TodoCard from '../TodoCard/TodoCard';

export default function MyTodos({ sort }) {
  const todos = useSelector((store) => store.todos);
  const sortTodos = React.useMemo(() => {
    if (sort) { return [...todos].sort((a, b) => a[sort].localeCompare(b[sort])); }
    return todos;
  }, [sort, todos]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      {sortTodos?.map((todo) => <TodoCard todo={todo} key={uuidv4()} />)}
    </div>
  );
}
