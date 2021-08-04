import { configureStore } from '@reduxjs/toolkit';
import taskNameSliceReducer from '../slices/taskName';
import tasksSliceReducer from '../slices/tasks';
import filterSliceReducer from '../slices/filter';

const store = configureStore({
  reducer: {
    taskName: taskNameSliceReducer,
    tasks: tasksSliceReducer,
    filter: filterSliceReducer,
  },
});

export default store;
