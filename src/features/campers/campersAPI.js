import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance';

/**
 * Tüm karavanları filtre ve sayfa numarasına göre çeker.
 */
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      // 1. Parametreleri temiz bir obje olarak hazırla
      const params = {};

      // Sayfalama parametrelerini ekle (MockAPI için string olması daha güvenli)
      params.page = String(page);
      params.limit = String(limit);

      // 2. Filtreleri kontrol ederek ekle
      if (filters && typeof filters === 'object') {
        Object.keys(filters).forEach((key) => {
          const value = filters[key];

          // Boş string, null veya undefined olanları asla ekleme
          if (value !== '' && value !== null && value !== undefined) {
            // Boolean filtreleri (AC, Kitchen vb.) sadece true ise ekle
            if (typeof value === 'boolean') {
              if (value === true) params[key] = value;
            } else {
              // String filtreleri (location, form vb.) ekle
              params[key] = value;
            }
          }
        });
      }

      // 3. İstek gönder
      // Axios, params objesini otomatik olarak ?key=value formatına çevirir.
      const response = await axiosInstance.get('/campers', { params });
      
      return response.data; 
    } catch (error) {
      // API 404 döndüğünde "Bulunamadı" mesajını yakala
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue('No campers found matching your criteria.');
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch campers'
      );
    }
  }
);

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