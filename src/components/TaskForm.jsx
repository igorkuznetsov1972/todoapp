import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';
import { inputTaskName } from '../slices/taskName';
import { addTask } from '../slices/tasks';

const TaskForm = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.taskName.text);
  const textInput = useRef();
  useEffect(() => {
    textInput.current.focus();
  });
  const handleChange = (e) => {
    e.preventDefault();
    dispatch(inputTaskName(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: v4(), text, state: 'active' }));
  };
  const isEmpty = text === '';

  return (
    <form className="form-inline mt-5" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          value={text}
          ref={textInput}
          className="form-control"
          placeholder="Enter Task"
          aria-describedby="button-addon2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-success"
          id="button-addon2"
          disabled={isEmpty}
        >
          Add
        </button>
      </div>

    </form>
  );
};

export default TaskForm;
