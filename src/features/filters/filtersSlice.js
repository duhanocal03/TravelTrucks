import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  location: '',
  form: '',         // 'alcove', 'panelvan' vb.
  engine: '',       // 'diesel', 'petrol' vb.
  transmission: '', // 'automatic', 'manual'
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters: () => initialState,
  },
});

export const { updateFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;