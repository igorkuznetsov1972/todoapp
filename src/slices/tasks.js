import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = { byId: {}, allIds: [], currentFilterName: 'all' };

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { byId, allIds } = state;
      const task = action.payload;
      return {
        ...state,
        byId: { ...byId, [task.id]: task },
        allIds: [task.id, ...allIds],
      };
    },
    removeTask: (state, action) => {
      const { byId, allIds } = state;
      const id = action.payload;
      return {
        ...state,
        byId: _.omit(byId, id),
        allIds: _.without(allIds, id),
      };
    },
    toggleTaskState: (state, { payload: { id } }) => {
      const task = state.byId[id];
      const newState = task.state === 'active' ? 'finished' : 'active';
      const updatedTask = { ...task, state: newState };
      return {
        ...state,
        byId: { ...state.byId, [task.id]: updatedTask },
      };
    },
    setTasksFilter: (state, { payload: { filterName } }) => ({
      ...state,
      currentFilterName: filterName,
    }),
  },
});

export const {
  addTask,
  removeTask,
  toggleTaskState,
  setTasksFilter,
} = tasksSlice.actions;
export default tasksSlice.reducer;
