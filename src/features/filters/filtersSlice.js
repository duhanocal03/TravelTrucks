import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  engine: "",
  form: "",
  transmission: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;