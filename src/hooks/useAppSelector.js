import { useSelector } from 'react-redux';

/**
 * Standart useSelector wrapper'ı.
 */
export const useAppSelector = (selector) => useSelector(selector);