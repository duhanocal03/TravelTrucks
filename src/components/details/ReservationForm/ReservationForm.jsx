import { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from '../ReservationForm/ReservationForm.module.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ödev Kuralı: Başarı bildirimi
    alert("Reservation successful! We will contact you soon.");
    window.location.reload(); // Formu sıfırlamak için basit bir yöntem
  };

  return (
    <div className={styles.formCard}>
      <h3 className={styles.title}>Book your campervan now</h3>
      <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text" 
          placeholder="Name*" 
          required 
          className={styles.input}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="email" 
          placeholder="Email*" 
          required 
          className={styles.input}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        
        <Button type="submit" variant="primary" className={styles.submitBtn}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ReservationForm;