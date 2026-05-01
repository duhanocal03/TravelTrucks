import { useDispatch } from 'react-redux';

/**
 * Proje genelinde standart useDispatch yerine bunu kullanmak,
 * ileride TypeScript'e geçersen tip güvenliği sağlar.
 */
export const useAppDispatch = () => useDispatch();