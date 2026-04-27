import FiltersSidebar from "../../components/catalog/FiltersSidebar/FiltersSidebar";
import CamperList from "../../components/catalog/CamperList/CamperList";
import LoadMoreButton from "../../components/catalog/LoadMoreButton/LoadMoreButton";
import styles from "./CatalogPage.module.css";

function CatalogPage() {
  return (
    <div className={styles.wrapper}>
      <FiltersSidebar />
      
      <div className={styles.content}>
        <CamperList />
        <LoadMoreButton />
      </div>
    </div>
  );
}

export default CatalogPage;