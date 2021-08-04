import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentFilterName: 'all' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTasksFilter: (state, action) => ({
      currentFilterName: action.payload,
    }),
  },
});

export const { setTasksFilter } = filterSlice.actions;
export default filterSlice.reducer;
