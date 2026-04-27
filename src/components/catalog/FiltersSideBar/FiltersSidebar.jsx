import styles from "./FiltersSidebar.module.css";

function FiltersSidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>

      <input placeholder="Location" />

      <h4>Vehicle Type</h4>
      <div className={styles.options}>
        <button>Van</button>
        <button>Fully Integrated</button>
        <button>Alcove</button>
      </div>

      <h4>Features</h4>
      <div className={styles.options}>
        <button>AC</button>
        <button>Kitchen</button>
        <button>Bathroom</button>
      </div>

      <button className={styles.searchBtn}>Search</button>
    </div>
  );
}

export default FiltersSidebar;