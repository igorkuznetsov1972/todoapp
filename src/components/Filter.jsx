import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasksFilter } from '../slices/tasks';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const Filter = () => {
  const currentFilterName = useSelector((state) => state.currentFilterName);
  const dispatch = useDispatch();
  const handleSetTasksFilter = (filterName) => () => {
    dispatch(setTasksFilter({ filterName }));
  };

  const renderFilter = ([state, name]) => {
    if (currentFilterName === state) {
      return name;
    }
    return (
      <div className="col">
        <button
          type="button"
          key={state}
          className="btn btn-link border-2 p-2"
          onClick={handleSetTasksFilter(state)}
        >
          {name}
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        {filters.map(renderFilter)}
      </div>
    </div>
  );
};

export default Filter;
