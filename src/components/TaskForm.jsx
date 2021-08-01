import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uniqueId } from 'lodash';
import { inputTaskName } from '../slices/taskName';
import { addTask } from '../slices/tasks';

const TaskForm = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.taskName.text);
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(inputTaskName(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: uniqueId(), text, state: 'active' }));
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input type="text" value={text} className="task-form__input form-control" placeholder="Enter Task" onChange={handleChange} />
      <button type="submit" className="btn btn-primary task-form__submit">Add</button>
    </form>
  );
};

export default TaskForm;
