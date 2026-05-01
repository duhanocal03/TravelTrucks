/**
 * LocalStorage'dan veri okumak için kullanılır.
 * @param {string} key - Okunacak verinin anahtarı (örn: 'favorites')
 * @returns {any} - Veri varsa parse edilmiş hali, yoksa null
 */
export const loadFromLocalStorage = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("LocalStorage okunurken hata oluştu:", error);
    return undefined;
  }
};

/**
 * LocalStorage'a veri kaydetmek için kullanılır.
 * @param {string} key - Kaydedilecek verinin anahtarı
 * @param {any} value - Kaydedilecek veri (JSON formatına çevrilir)
 */
export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("LocalStorage kaydedilirken hata oluştu:", error);
  }
};

/**
 * LocalStorage'dan veri silmek için kullanılır.
 */
export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("LocalStorage silinirken hata oluştu:", error);
  }
};