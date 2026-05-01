import styles from './RatingStars.module.css';

const RatingStars = ({ rating, reviewsCount }) => {
  // 5 elemanlı bir dizi oluşturup yıldızları dönüyoruz
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    // Eğer rating 4.4 ise, ilk 4 yıldız sarı, sonuncusu gri olur
    return (
      <span 
        key={index} 
        className={starNumber <= Math.round(rating) ? styles.filled : styles.empty}
      >
        ★
      </span>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.stars}>{stars}</div>
      <span className={styles.text}>
        {rating}({reviewsCount} Reviews)
      </span>
    </div>
  );
};

export default RatingStars;