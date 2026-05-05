import styles from './FeaturesList.module.css';

const FeaturesList = ({ camper }) => {
  return (
    <div className={styles.container}>
      
      <h3 className={styles.title}>Vehicle details</h3>

      {/* 🔥 BADGES */}
      <div className={styles.badges}>
        <span className={styles.badge}>{camper.transmission}</span>
        <span className={styles.badge}>{camper.engine}</span>
        {camper.AC && <span className={styles.badge}>AC</span>}
        {camper.bathroom && <span className={styles.badge}>Bathroom</span>}
        {camper.kitchen && <span className={styles.badge}>Kitchen</span>}
        {camper.TV && <span className={styles.badge}>TV</span>}
        {camper.radio && <span className={styles.badge}>Radio</span>}
      </div>

      <div className={styles.divider}></div>

      {/* 🔥 DETAILS */}
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <span>Form</span>
          <span className={styles.value}>{camper.form}</span>
        </li>
        <li className={styles.listItem}>
          <span>Length</span>
          <span className={styles.value}>{camper.length}</span>
        </li>
        <li className={styles.listItem}>
          <span>Width</span>
          <span className={styles.value}>{camper.width}</span>
        </li>
        <li className={styles.listItem}>
          <span>Height</span>
          <span className={styles.value}>{camper.height}</span>
        </li>
        <li className={styles.listItem}>
          <span>Tank</span>
          <span className={styles.value}>{camper.tank}</span>
        </li>
        <li className={styles.listItem}>
          <span>Consumption</span>
          <span className={styles.value}>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesList;