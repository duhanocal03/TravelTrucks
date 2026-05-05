import { useState } from 'react';
import styles from './Gallery.module.css';

const Gallery = ({ images }) => {
  // İlk resmi varsayılan büyük resim olarak atıyoruz
  const [selectedImage, setSelectedImage] = useState(images[0]?.original);

  return (
    <div className={styles.galleryWrapper}>
      {/* Büyük Ana Resim */}
      <div className={styles.mainImageContainer}>
        <img src={selectedImage} alt="Camper" className={styles.mainImage} />
      </div>

      {/* Küçük Resim Listesi (Thumbnails) */}
      <ul className={styles.thumbnails}>
        {images.map((img, index) => (
          <li 
            key={index} 
            className={`${styles.thumbItem} ${selectedImage === img.original ? styles.activeThumb : ''}`}
            onClick={() => setSelectedImage(img.original)}
          >
            <img src={img.original} alt={`View ${index}`} className={styles.thumbImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;