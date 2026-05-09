import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../features/campers/campersSlice";
import CamperCard from "../../components/catalog/CamperCard/CamperCard"
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  
  // Redux state'inden gerekli verileri alıyoruz
  const { items, favorites, isLoading } = useSelector((state) => state.campers);

  // Sayfa yüklendiğinde eğer ana item listesi boşsa verileri çek
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchCampers({ page: 1 }));
    }
  }, [dispatch, items.length]);

  // Sadece favori listesindeki ID'lere sahip olan araçları filtrele
  const favoriteItems = items.filter((item) => favorites.includes(item.id));

  if (isLoading && items.length === 0) {
    return <div className={styles.loader}>Loading favorites...</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Favorite Campers</h1>
        <p className={styles.subtitle}>
          You have {favoriteItems.length} saved {favoriteItems.length === 1 ? 'camper' : 'campers'}
        </p>
      </header>
      
      {favoriteItems.length > 0 ? (
        <div className={styles.list}>
          {favoriteItems.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>❤️</div>
          <h2>No favorites yet</h2>
          <p>Go to the catalog and click the heart icon to save your favorite campers!</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;