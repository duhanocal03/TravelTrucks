import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>

        <button onClick={() => navigate("/catalog")}>
          View Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;