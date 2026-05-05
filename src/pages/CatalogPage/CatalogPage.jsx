import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampers } from '../../features/campers/campersAPI';
import { incrementPage } from '../../features/campers/campersSlice';
//for fix 
import FiltersSidebar from "../../components/catalog/FiltersSidebar/FiltersSidebar";
import CamperCard from '../../components/catalog/CamperCard/CamperCard';
import Loader from '../../components/common/Loader/Loader';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const { items, isLoading, page, total } = useSelector(
    (state) => state.campers
  );
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchCampers({ page, filters }));
  }, [dispatch]);

  const handleLoadMore = () => {
    const nextPage = page + 1; // Mevcut sayfanın bir fazlası
    dispatch(incrementPage()); // Redux state'indeki page'i artırır
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  const hasMore = items.length > 0  && items.length < total;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.catalogLayout}>
          
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <FiltersSidebar />
          </aside>

          {/* Content */}
          <main className={styles.content}>
            {items.length > 0 ? (
              <ul className={styles.camperList}>
                {items.map((camper) => (
                  <li key={camper.id}>
                    <CamperCard camper={camper} />
                  </li>
                ))}
              </ul>
            ) : (
              !isLoading && <p>No campers found.</p>
            )}

            {isLoading && <Loader />}

            {hasMore && !isLoading && (
              <button
                className={styles.loadMoreBtn}
                onClick={handleLoadMore}
              >
                Load more
              </button>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;