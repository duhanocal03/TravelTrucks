import styles from './Container.module.css';

const Container = ({ children, className = "" }) => {
  // Dışarıdan ekstra klas eklemek istersen (örn: sayfa bazlı boşluklar) className prop'unu ekledim.
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;