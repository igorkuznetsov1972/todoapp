/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addTask } from './tasks';

const initialState = { text: '' };

const taskNameSlice = createSlice({
  name: 'taskName',
  initialState,
  reducers: {
    inputTaskName: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: {
    [addTask]: (state) => {
      state.text = '';
    },
  },
});

export const { inputTaskName } = taskNameSlice.actions;
export default taskNameSlice.reducer;
