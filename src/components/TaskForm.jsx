import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
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
    dispatch(addTask({ id: v4(), text, state: 'active' }));
  };

  return (
    <form className="form-inline mt-5" onSubmit={handleSubmit}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          value={text}
          className="form-control"
          placeholder="Enter Task"
          onChange={handleChange}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success mt-2 mb-2">Add</button>
      </div>
    </form>
  );
};

export default TaskForm;
