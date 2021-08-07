import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-named-as-default
import { setTasksFilter } from '../slices/filter';

const filters = [['all', 'All Tasks'], ['active', 'Active Tasks'], ['finished', 'Finished Tasks']];

const Filter = () => {
  const currentFilterName = useSelector((state) => state.filter.currentFilterName);
  const dispatch = useDispatch();
  const handleSetTasksFilter = (filterName) => () => {
    dispatch(setTasksFilter(filterName));
  };

  const renderFilter = ([state, name]) => {
    if (currentFilterName === state) {
      return (
        <button
          type="button"
          key={state}
          className="btn btn-primary"
        >
          {name}
        </button>

      );
    }
    return (
      <button
        type="button"
        key={state}
        className="btn btn-secondary"
        onClick={handleSetTasksFilter(state)}
      >
        {name}
      </button>

    );
  };

  return (
    <div className="container d-grid gap-2">
      <div className="d-grid gap-4 d-md-flex justify-content-md-start">
        {filters.map(renderFilter)}
      </div>
    </div>
  );
};

export default Filter;
