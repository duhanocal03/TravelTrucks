import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';

/**
 * Tüm karavanları filtre ve sayfa numarasına göre çeker.
 * @param {Object} params - { page, limit, filters }
 */
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      // 1. Temel sayfalama parametrelerini oluştur
      const searchParams = new URLSearchParams({
        page: String(page),
        limit: String(limit),
      });

      // 2. Filtreleri dinamik olarak URL'e ekle
      // FiltersSidebar'dan gelen objeyi (ac, kitchen, form, location vb.) tarar
      Object.keys(filters).forEach((key) => {
        const value = filters[key];
        
        // Sadece değeri olan (boş olmayan) filtreleri ekle
        if (value !== undefined && value !== null && value !== '' && value !== false) {
          searchParams.append(key, value);
        }
      });

      // 3. İstek gönder: örn. /campers?page=1&limit=4&location=Kyiv&ac=true
      const response = await axiosInstance.get(`/campers?${searchParams.toString()}`);
      
      // MockAPI bazen direkt array döner, bazen total bilgisini header'da verir.
      // Eğer backend yapın farklıysa burayı return response.data.items olarak güncelleyebilirsin.
      return response.data; 
    } catch (error) {
      // Axios hata mesajını Redux state'ine gönder
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch campers'
      );
    }
  }
);

/**
 * ID bazlı tek bir karavan detayı çeker (Modal veya Detail sayfası için).
 * @param {string} id - Karavan ID'si
 */
export const fetchCamperById = createAsyncThunk(
  'campers/fetchById',
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch camper details'
      );
    }
  }
);