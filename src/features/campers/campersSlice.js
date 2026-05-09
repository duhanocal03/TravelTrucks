import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axiosInstance";

// ASYNC FETCH (FILTER + PAGINATION)
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      const params = new URLSearchParams();
      params.append("page", String(page));
      params.append("limit", "4");

      if (filters.location && filters.location.trim() !== "") {
        params.append("location", filters.location.trim());
      }

      // Sadece dolu filtreleri URL ekle
      if (filters && typeof filters === 'object') {
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== '' && value !== null && value !== undefined && value !== false) {
            params.append(key, value);
          }
        });
      }

      const res = await api.get(`/campers?${params.toString()}`);

      const items = Array.isArray(res.data) ? res.data : (res.data.items || []);
      const total = res.data.total || res.data.length || items.length || 0;

      return { items, total };
    } catch (error) {
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue("No campers found matching your criteria.");
      }
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch campers");
    }
  }
);

const initialState = {
  items: [],
  // Sayfa yenilendiğinde favorilerin gitmemesi için localStoragedan oku
  favorites: JSON.parse(localStorage.getItem("favorites")) || [], 
  total: 0,
  page: 1,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
    resetPagination: (state) => {
      state.page = 1;
      state.items = [];
      state.total = 0;
    },
    clearError: (state) => {
      state.error = null;
    },
    //  FAVORİ EKLEME / ÇIKARMA 
    toggleFavorite: (state, action) => {
      const camperId = action.payload;
      const index = state.favorites.indexOf(camperId);
      
      if (index >= 0) {
        // Varsa çıkar
        state.favorites.splice(index, 1);
      } else {
        // Yoksa ekle
        state.favorites.push(camperId);
      }
      
      // Güncel listeyi localStorage'a kaydet
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          const newItems = action.payload.items.filter(
            (newItem) => !state.items.some((existingItem) => existingItem.id === newItem.id)
          );
          state.items = [...state.items, ...newItems];
        }

        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.items = []; 
      });
  },
});

export const { incrementPage, resetPagination, clearError, toggleFavorite } = campersSlice.actions;
export default campersSlice.reducer;