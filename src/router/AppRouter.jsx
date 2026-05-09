import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import CamperDetailsPage from '../pages/CamperDetailsPage/CamperDetailsPage';
import Layout from '../components/layout/Layout';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Ana Sayfa */}
        <Route index element={<HomePage />} />
        
        {/* Katalog Sayfası */}
        <Route path="catalog" element={<CatalogPage />} />
        
        {/* Detay Sayfası */}
        <Route path="catalog/:id" element={<CamperDetailsPage />} />
        
        {/* Yanlış rotaları ana sayfaya yönlendir */}
        <Route path="*" element={<Navigate to="/" replace />} />
        { /* Favoriler sayfası */}
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;