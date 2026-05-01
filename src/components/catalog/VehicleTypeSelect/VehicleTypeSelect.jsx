import FeaturesCheckbox from '../FeaturesCheckbox/FeaturesCheckbox';
import styles from './VehicleTypeSelect.module.css';

const VEHICLE_TYPES = [
  { id: 'panelVan', label: 'Panel Van', icon: '/icons/panel-van.svg', value: 'panelVan' },
  { id: 'fullyIntegrated', label: 'Integrated', icon: '/icons/integrated.svg', value: 'fullyIntegrated' },
  { id: 'alcove', label: 'Alcove', icon: '/icons/alcove.svg', value: 'alcove' },
];

const VehicleTypeSelect = ({ value, onChange }) => {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.groupTitle}>Vehicle type</h3>
      <div className={styles.grid}>
        {VEHICLE_TYPES.map((type) => (
          <FeaturesCheckbox
            key={type.id}
            type="radio" // Tekli seçim için radyo tipi
            label={type.label}
            icon={type.icon}
            name="form" // API'nin beklediği alan adı
            value={type.value}
            checked={value === type.value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeSelect;