import RatingStars from '../../common/RatingStars/RatingStars'; // RatingStars'ı kullanacağımız için import ediyoruz
import styles from './CamperInfo.module.css'; // Varsa stil dosyan

const CamperInfo = ({ camper }) => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.name}>{camper.name}</h2>
      <div className={styles.meta}>
        <RatingStars rating={camper.rating} reviewsCount={camper.reviews.length} />
        <span className={styles.location}>📍 {camper.location}</span>
      </div>
      <p className={styles.price}>€{camper.price.toFixed(2)}</p>
    </div>
  );
};

// KRİTİK SATIR: Bu satır olmazsa "does not provide an export named 'default'" hatası alırsın.
export default CamperInfo;