import styles from './FeaturesList.module.css';

const FeaturesList = ({ camper }) => {
  return (
    <div className={styles.container}>
      {/* Üst Kısım: Özellik Rozetleri (Badges) */}
      <div className={styles.badges}>
        {/* Tasarımda ilk olarak vites ve motor tipi görünüyor */}
        <span className={styles.badge}>⚙️ {camper.transmission}</span>
        <span className={styles.badge}>⛽ {camper.engine}</span>
        {camper.AC && <span className={styles.badge}>❄️ AC</span>}
        {camper.bathroom && <span className={styles.badge}>🚿 Bathroom</span>}
        {camper.kitchen && <span className={styles.badge}>🍳 Kitchen</span>}
        {camper.TV && <span className={styles.badge}>📺 TV</span>}
        {camper.radio && <span className={styles.badge}>📻 Radio</span>}
        {camper.refrigerator && <span className={styles.badge}>🧊 Refrigerator</span>}
        {camper.microwave && <span className={styles.badge}>♨️ Microwave</span>}
        {camper.gas && <span className={styles.badge}>💨 Gas</span>}
        {camper.water && <span className={styles.badge}>💧 Water</span>}
      </div>

      {/* Alt Kısım: Araç Detayları (Vehicle details) */}
      <div className={styles.details}>
        <h3 className={styles.title}>Vehicle details</h3>
        <div className={styles.divider}></div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>Form</span>
            <span className={styles.capitalize}>{camper.form}</span>
          </li>
          <li className={styles.listItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={styles.listItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={styles.listItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={styles.listItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={styles.listItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeaturesList;