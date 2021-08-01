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
      <button
        type="button"
        key={state}
        className="btn btn-link border-0 p-0"
        onClick={handleSetTasksFilter(state)}
      >
        {name}
      </button>
    );
  };

  return (
    <div className="mt-3 d-flex justify-content-around">
      {filters.map(renderFilter)}
    </div>
  );
};

export default Filter;
