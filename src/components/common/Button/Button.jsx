import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  onClick, 
  to, 
  type = 'button', 
  variant = 'primary', // 'primary', 'outline'
  className = '',
  target = '_self'
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

  // Eğer 'to' prop'u varsa Link bileşeni olarak davranır (Detay sayfası için)
  if (to) {
    return (
      <Link to={to} className={buttonClass} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;