import React from "react";
import computerFrame from "../../../public/ComputerFrame.png";
import styles from "../../app/style.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
import { NavLink } from "react-router-dom";
import { circlesData } from "../../app/constants";
const maptilerProvider = maptiler("TWkPts1owmC3BkPZMqZz", "streets");

export function GetLocation() {
  return (
    <Map
      twoFingerDrag
      provider={maptilerProvider}
      metaWheelZoom
      metaWheelZoomWarning="Натисніть ctrl + колесо мишки для масштабування"
      dprs={[1, 2]}
      height={350}
      defaultCenter={[49.83840655613737, 24.003911234444445]}
      defaultZoom={16}
    >
      <ZoomControl></ZoomControl>
      <Marker width={50} anchor={[49.83840655613737, 24.003911234444445]} />
    </Map>
  );
}
const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  550: { items: 4 },
  1024: { items: 6, itemsFit: "fill" },
};
const items = [
  <img
    src="../../public/carousel_1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_4.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_5.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_6.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_7.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_8.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_9.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_10.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_11.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../public/carousel_12.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
];

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <section className={styles.home}>
        <section className={styles.frame}>
          <img className={styles.photo} src={computerFrame} alt="frame" />

          <p className={styles.centered}>Elegant</p>
          <p className={styles.left}>
            Бути красивою та доглянутою - мрія кожної жінки Головне - правильно
            вибрати “Свою” перукарню
          </p>
        </section>
        <div></div>
        <section className={styles.services}>
          <span className={styles.bigtext}>-Наші послуги-</span>
          <section className={styles.pictures}>
            {circlesData.data.map((circle) => {
              return (
                <div key={circle.alt} className={styles.field}>
                  <NavLink to={circle.navigation}>
                    <div className={styles.circles}>
                      <img src={circle.src} alt={circle.alt} />
                    </div>
                  </NavLink>
                  <p>{circle.alt}</p>
                </div>
              );
            })}
          </section>
        </section>
        <section className={styles.carousel}>
          <span className={styles.bigtext}>-Галерея-</span>
          <div className={styles.gallery}>
            <AliceCarousel
              infinite
              autoPlay
              autoPlayInterval={3000}
              autoHeight
              responsive={responsive}
              mouseTracking
              items={items}
            />
          </div>
        </section>
        <section className={styles.map}>
          <span className={styles.bigtext}>-Наша локація-</span>
          <div className={styles.location}>{GetLocation()}</div>
        </section>
      </section>
    </>
  );
};
export default Home;
