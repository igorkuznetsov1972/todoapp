import { configureStore } from '@reduxjs/toolkit';
import taskNameSliceReducer from '../slices/taskName';
import tasksSliceReducer from '../slices/tasks';

const store = configureStore({
  reducer: {
    taskName: taskNameSliceReducer,
    tasks: tasksSliceReducer,
  },
});

export default store;
