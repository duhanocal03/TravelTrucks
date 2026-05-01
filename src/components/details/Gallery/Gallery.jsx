import styles from './Gallery.module.css';

const Gallery = ({ images }) => {
  // Eğer görsel yoksa boş dön, hata vermesin
  if (!images || images.length === 0) return null;

  return (
    <div className={styles.gallery}>
      {images.map((img, index) => (
        <div key={index} className={styles.imageWrapper}>
          <img
            // API'den gelen veri yapısına göre (obje veya direkt string olabilir)
            src={img.original || img} 
            alt={`Camper view ${index + 1}`}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;