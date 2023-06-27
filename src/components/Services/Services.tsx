import React from "react";
import styles from "../../app/style.module.css";
const Services = () => {
  return (
    <div className={styles.servicespage}>
      <div className={styles.servicespage__hairbox}>
        <img src="../../../public/services_hair.png"></img>
        <p className={styles.servicespage__text}>Перукарські послуги</p>
        <button
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
      <div className={styles.servicespage__hairbox}>
        <img src="../../../public/manicure_services.jpg"></img>
        <p className={styles.servicespage__text}>Послуги манікюру</p>
        <button
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
      <div className={styles.servicespage__hairbox}>
        <img
          className={styles.servicespage__hairbox_flip}
          src="../../../public/brows_services.png"
        ></img>
        <p className={styles.servicespage__text}>Брови та вії</p>
        <button
          className={`${styles.servicespage__hairbox} ${styles.servicespage__sender}`}
        >
          <p>ДЕТАЛЬНІШЕ</p>
        </button>
      </div>
    </div>
  );
};

export default Services;
