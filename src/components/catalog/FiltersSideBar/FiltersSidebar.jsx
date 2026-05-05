import { resetFilters, setFilter } from '../../../features/filters/filtersSlice';
import { fetchCampers } from '../../../features/campers/campersAPI';
import { resetPagination } from '../../../features/campers/campersSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import LocationInput from '../LocationInput/LocationInput';
import styles from './FiltersSideBar.module.css';

const FiltersSideBar = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const handleChange = (e) => {
    dispatch(setFilter({ name: e.target.name, value: e.target.value }));
  };

  const handleSearch = () => {
    dispatch(resetPagination());
    dispatch(fetchCampers({ page: 1, filters }));
  };

  const handleClearFilters = () => {
  dispatch(resetFilters());
  dispatch(resetPagination());
  dispatch(fetchCampers({ page: 1, filters: {} }));
};

  return (
    <div className={styles.sidebar}>
     
        <div className={styles.group}>
        <LocationInput
        value={filters.location || ""} 
  // onChange içindeki 'val' direkt inputtan gelen string olmalı
  onChange={(val) => dispatch(setFilter({ name: 'location', value: val }))}
        />
    </div>
    
      <div className={styles.group}>
        <h3>Filters</h3>

        {/* 1. Camper Form Bölümü */}
  <p className={styles.label}>Camper form</p>
  {[
    { id: "alcove", label: "Alcove" },
    { id: "panelVan", label: "Panel Van" },
    { id: "integrated", label: "Integrated" },
    { id: "semiIntegrated", label: "Semi Integrated" }
  ].map((item) => (
    <label key={item.id} className={styles.option}>
      <input
        type="radio"
        name="form"
        value={item.id}
        checked={filters.form === item.id}
        onChange={handleChange}
      />
      {item.label}
    </label>
  ))}

  {/* 2. Engine Bölümü */}
  <p className={styles.label} style={{ marginTop: '24px' }}>Engine</p>
  {["Diesel", "Petrol", "Hybrid", "Electric"].map((item) => (
    <label key={item} className={styles.option}>
      <input
        type="radio"
        name="engine"
        value={item}
        checked={filters.engine === item}
        onChange={handleChange}
      />
      {item}
    </label>
  ))}

  {/* 3. Transmission Bölümü */}
  <p className={styles.label} style={{ marginTop: '24px' }}>Transmission</p>
  {[
    { id: "automatic", label: "Automatic" },
    { id: "manual", label: "Manual" }
  ].map((item) => (
    <label key={item.id} className={styles.option}>
      <input
        type="radio"
        name="transmission"
        value={item.id}
        checked={filters.transmission === item.id}
        onChange={handleChange}
      />
      {item.label}
    </label>
  ))}
       
      </div>

      <div className={styles.actions}>
        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>

        <button 
          className={styles.clearBtn} 
          onClick={handleClearFilters}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default FiltersSideBar;
