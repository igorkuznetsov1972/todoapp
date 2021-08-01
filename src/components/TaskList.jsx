import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../slices/tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(removeTask(id));
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <ul className="task-list list-group">
      {tasks.map(({ text, id }) => (
        <li key={id} className="task-list-item list-group-item d-flex">
          <span className="mr-auto">{text}</span>
          <button type="button" className="close" onClick={handleRemoveTask(id)}>
            <span>&times;</span>
          </button>
        </li>
      )) }
    </ul>
  );
};

export default TaskList;
