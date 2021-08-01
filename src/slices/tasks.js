import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
    },
    removeTask: (state, action) => {
      const id = action.payload;
      return state.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
