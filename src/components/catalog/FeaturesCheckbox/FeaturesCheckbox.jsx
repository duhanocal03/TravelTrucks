import styles from './FeaturesCheckbox.module.css';

const FeaturesCheckbox = ({ 
  label, 
  icon, 
  name, 
  type = 'radio', // 'radio' veya 'checkbox' olabilir
  checked, 
  onChange 
}) => {
  return (
    <label className={`${styles.checkboxLabel} ${checked ? styles.checked : ''}`}>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.hiddenInput}
      />
      <div className={styles.content}>
        {icon && <img src={icon} alt={label} className={styles.icon} />}
        <span className={styles.text}>{label}</span>
      </div>
    </label>
  );
};

export default FeaturesCheckbox;