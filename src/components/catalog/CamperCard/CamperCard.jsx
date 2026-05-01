import { useNavigate } from 'react-router-dom';
import styles from './CamperCard.module.css';

const CamperCard = ({ camper }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img
        src={camper.gallery[0]?.original}
        alt={camper.name}
        className={styles.image}
      />

      <div className={styles.cardContent}>
        <div className={styles.header}>
          <h2>{camper.name}</h2>
          <span>€{camper.price}</span>
        </div>

        <p className={styles.meta}>
          ⭐ {camper.rating} | 📍 {camper.location}
        </p>

        <p className={styles.desc}>{camper.description}</p>

        <button
          className={styles.btn}
          onClick={() => navigate(`/catalog/${camper.id}`)}
        >
          Show more
        </button>
      </div>
    </div>
  );
};


export default CamperCard;