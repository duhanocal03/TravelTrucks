import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
  <span className={styles.travelText}>Travel</span>
  <span className={styles.trucksText}>Trucks</span>
</NavLink>
        
        <div className={styles.navLinks}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : styles.link}
          >
            Home
          </NavLink>
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => isActive ? styles.active : styles.link}
          >
            Catalog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;