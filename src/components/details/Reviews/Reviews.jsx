import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.noReviews}>No reviews yet for this camper.</p>;
  }

  // Yıldızları oluşturmak için küçük bir yardımcı fonksiyon
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < Math.round(rating) ? styles.filledStar : styles.emptyStar}>
        ★
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      {reviews.map((review, index) => (
        <div key={index} className={styles.reviewCard}>
          <div className={styles.header}>
            {/* İsimden Avatar Oluşturma (İlk Harf) */}
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            
            <div className={styles.meta}>
              <h4 className={styles.name}>{review.reviewer_name}</h4>
              <div className={styles.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;