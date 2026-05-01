import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';

// Backend filtreleme ve sayfalama destekli Thunk
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      // Ödev kuralı: Filtreleme backend tarafında (params ile) yapılmalı
      // MockAPI için uygun query parametrelerini oluşturuyoruz
      const params = {
        page,
        limit,
        ...filters,
      };

      const response = await axiosInstance.get('/campers', { params });
      return response.data; // API'den dönen veri: { items: [...], total: 32 }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
    page: 1,
  },
  reducers: {
    // Ödev kuralı: Yeni filtrede önceki sonuçlar temizlenmeli
    resetPagination: (state) => {
      state.items = [];
      state.page = 1;
    },
    incrementPage: (state) => {
      state.page += 1;
    }
  },
 extraReducers: (builder) => {
  builder
    .addCase(fetchCampers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      // Sayfa 1 ise listeyi sıfırla, değilse üzerine ekle (Load More mantığı)
      if (state.page === 1) {
        state.items = action.payload.items;
      } else {
        state.items = [...state.items, ...action.payload.items];
      }
      state.total = action.payload.total;
    });
}
  
});

export const { resetPagination, incrementPage } = campersSlice.actions;
export default campersSlice.reducer;