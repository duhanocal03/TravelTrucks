import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance';
import Loader from '../../components/common/Loader/Loader';
import Gallery from '../../components/details/Gallery/Gallery';
import CamperInfo from '../../components/details/CamperInfo/CamperInfo';
import Reviews from '../../components/details/Reviews/Reviews';
import ReservationForm from '../../components/details/ReservationForm/ReservationForm';
import FeaturesList from '../../components/details/FeaturesList/FeaturesList';
import styles from './CamperDetailsPage.module.css';

const CamperDetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('features'); // 'features' veya 'reviews'

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const response = await axiosInstance.get(`/campers/${id}`);
        setCamper(response.data);
      } catch (error) {
        console.error("Detaylar yüklenemedi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCamperDetails();
  }, [id]);

  if (isLoading) return <Loader />;
  if (!camper) return <div>Karavan bulunamadı.</div>;

  return (
    <div className={styles.container}>
      <CamperInfo camper={camper} />
      <Gallery images={camper.gallery} />
      
      <div className={styles.description}>
        {camper.description}
      </div>

      <div className={styles.tabs}>
        <button 
          className={activeTab === 'features' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('features')}
        >
          Features
        </button>
        <button 
          className={activeTab === 'reviews' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.detailsContent}>
          {activeTab === 'features' ? (
            <FeaturesList camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>
        
        <div className={styles.formContainer}>
          <ReservationForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;