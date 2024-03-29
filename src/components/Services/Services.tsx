import styles from "../../app/style.module.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.servicespage}>
      <div className={styles.servicespage__hairbox}>
        <img src="/services_hair.png"></img>
        <p className={styles.servicespage__text}>Перукарські послуги</p>
        <button
          onClick={() => {
            navigate("/price/hairdressingService");
            window.scrollTo(0, 0);
          }}
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
      <div className={styles.servicespage__hairbox}>
        <img src="/manicure_services.jpg"></img>
        <p className={styles.servicespage__text}>Послуги манікюру</p>
        <button
          onClick={() => {
            navigate("/price/manicureService");
            window.scrollTo(0, 0);
          }}
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
      <div className={styles.servicespage__hairbox}>
        <img
          className={styles.servicespage__hairbox_flip}
          src="/brows_services.png"
        ></img>
        <p className={styles.servicespage__text}>Брови та вії</p>
        <button
          onClick={() => {
            navigate("/price/eyebrows&eyelashes");
            window.scrollTo(0, 0);
          }}
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
    </div>
  );
};

export default Services;
