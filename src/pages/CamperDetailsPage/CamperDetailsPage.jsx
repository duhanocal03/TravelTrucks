import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/axiosInstance";

import Loader from "../../components/common/Loader/Loader";
import Gallery from "../../components/details/Gallery/Gallery";
import CamperInfo from "../../components/details/CamperInfo/CamperInfo";
import Reviews from "../../components/details/Reviews/Reviews";
import ReservationForm from "../../components/details/ReservationForm/ReservationForm";
import FeaturesList from "../../components/details/FeaturesList/FeaturesList";

import styles from "./CamperDetailsPage.module.css";

const CamperDetailsPage = () => {
  const { id } = useParams();

  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const res = await api.get(`/campers/${id}`);
        setCamper(res.data);
      } catch (error) {
        console.error("Detaylar alınamadı:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCamperDetails();
  }, [id]);

  if (isLoading) return <Loader />;
  if (!camper) return <p>Camper not found</p>;

  return (
    <section className={styles.section}>
      
      {/* 🔥 TOP */}
      <div className={styles.topSection}>
        
        {/* SOL - GALLERY */}
        <div className={styles.galleryBox}>
          <Gallery images={camper.gallery} />
        </div>

        {/* SAĞ - INFO */}
        <div className={styles.infoBox}>
          <CamperInfo camper={camper} />
          <p className={styles.description}>{camper.description}</p>
            <FeaturesList camper={ camper} />
        </div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className={styles.bottomSection}>

        {/* SOL */}
        <div className={styles.left}>
          <Reviews reviews={camper.reviews} />
        </div>

        {/* SAĞ */}
        <div className={styles.right}>
          <ReservationForm />
        </div>

      </div>

    </section>
  );
};

export default CamperDetailsPage;