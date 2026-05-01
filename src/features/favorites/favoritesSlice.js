import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';

// Başlangıç durumunu localstorage'dan çekiyoruz
const initialState = {
  items: loadFromLocalStorage('favorites') || [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      
      // Her değişimde localStorage'ı güncelliyoruz
      saveToLocalStorage('favorites', state.items);
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;