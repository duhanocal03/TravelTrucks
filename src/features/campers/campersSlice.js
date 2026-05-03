import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/axiosInstance";

// 🔥 ASYNC FETCH (FILTER + PAGINATION)
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

      // 🔥 MOCKAPI VE FARKLI BACKEND YAPILARI İÇİN GÜVENLİ PARSE
      // Konsoldaki "Object" uyarısına istinaden items kontrolü eklendi
      const items = Array.isArray(res.data) ? res.data : (res.data.items || []);
      const total = res.data.total || res.data.length || items.length || 0;

      return { items, total };
    } catch (error) {
      // 404 hatası "Bulunamadı" demektir, bu hata mesajını yakalıyoruz
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue("No campers found matching your criteria.");
      }
      return thunkAPI.rejectWithValue(error.message || "Failed to fetch campers");
    }
  }
);

const initialState = {
  items: [],
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
    // Filtre değiştiğinde veya manuel temizlendiğinde kullanılabilir
    clearError: (state) => {
      state.error = null;
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

        // 🔥 PAGINATION MANTIĞI: 1. sayfada listeyi sıfırla, diğerlerinde üstüne ekle
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          // Mükerrer veri eklenmesini önlemek için basit bir kontrol
          const newItems = action.payload.items.filter(
            (newItem) => !state.items.some((existingItem) => existingItem.id === newItem.id)
          );
          state.items = [...state.items, ...newItems];
        }

        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        // API 404 döndüğünde "No campers found" mesajı buraya düşer
        state.error = action.payload;
        // Hata durumunda listeyi temizlemek, ekrandaki "Not Found" yazısını tetikler
        state.items = []; 
      });
  },
});

export const { incrementPage, resetPagination, clearError } = campersSlice.actions;
export default campersSlice.reducer;