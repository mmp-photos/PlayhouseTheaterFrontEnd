// classesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your async thunk action
export const fetchClasses = createAsyncThunk(
  'classes/fetchClasses',
  async () => {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_BASE_URL + "classes/all_data");
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

// Define your slice
const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    classes: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.loading = false;
        state.classes = action.payload;
        state.error = null;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { } = classesSlice.actions; // You can export any additional action creators if needed
export default classesSlice.reducer;
