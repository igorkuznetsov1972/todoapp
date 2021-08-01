import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskState } from '../slices/tasks';
import filteredTasksSelector from '../selectors/index';

const TaskList = () => {
  const tasks = useSelector((state) => filteredTasksSelector(state));
  const dispatch = useDispatch();
  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(removeTask(id));
  };
  const handleToggleTaskState = (id) => () => {
    dispatch(toggleTaskState({ id }));
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <ul className="task-list list-group mt-3">
      {tasks.map(({ text, id, state }) => (
        <li key={id} className="task-list-item list-group-item d-flex">
          <span className="mr-auto">
            <button type="button" className="btn btn-link" onClick={handleToggleTaskState(id)}>
              {state === 'active' ? text : <s>{text}</s>}
            </button>
          </span>
          <button type="button" className="close" onClick={handleRemoveTask(id)}>
            <span>&times;</span>
          </button>
        </li>
      )) }
    </ul>
  );
};

export default TaskList;
