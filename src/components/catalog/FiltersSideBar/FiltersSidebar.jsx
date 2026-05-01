import { updateFilter, resetFilters } from '../../../features/filters/filtersSlice';
import { fetchCampers } from '../../../features/campers/campersAPI';
//import { resetPagination } from '../../features/campers/campersSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
//import LocationInput from './LocationInput';
import styles from './FiltersSidebar.module.css';

const FiltersSidebar = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const handleChange = (e) => {
    dispatch(updateFilter({ name: e.target.name, value: e.target.value }));
  };

  const handleSearch = () => {
    dispatch(fetchCampers({ page: 1, filters }));
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>

      <div className={styles.group}>
        <p>Engine</p>
        {["diesel", "petrol"].map((item) => (
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
      </div>

      <div className={styles.actions}>
        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>

        <button
          className={styles.clearBtn}
          onClick={() => dispatch(resetFilters())}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default FiltersSidebar;
