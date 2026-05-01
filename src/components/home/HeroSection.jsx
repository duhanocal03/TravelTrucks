import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/catalog')}
          className={styles.ctaBtn}
        >
          View Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;