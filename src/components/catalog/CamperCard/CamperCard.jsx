import styles from "./CamperCard.module.css";

function CamperCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="camper"
      />

      <div className={styles.info}>
        <div className={styles.top}>
          <h3>Road Bear C 23-25</h3>
          <p>€8000.00</p>
        </div>

        <p className={styles.desc}>
          Comfortable camper with everything you need.
        </p>

        <div className={styles.features}>
          <span>AC</span>
          <span>Kitchen</span>
          <span>Bathroom</span>
        </div>

        <button>Show More</button>
      </div>
    </div>
  );
}

export default CamperCard;