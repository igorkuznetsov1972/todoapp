/* eslint-disable react/prop-types */
import React from 'react';
import { removeTask } from '../slices/tasks';

const TaskListItem = (props) => {
  const { text, id } = props;
  const handleRemoveTask = (taskId) => () => {
    removeTask({ taskId });
  };

  return (
    <li key={id} className="task-list-item list-group-item d-flex">
      <span className="mr-auto">{text}</span>
      <button type="button" className="close" onClick={handleRemoveTask(id)}>
        <span>&times;</span>
      </button>
    </li>
  );
};

export default TaskListItem;
