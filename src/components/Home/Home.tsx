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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleDragStart = (e: any) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  550: { items: 4 },
  1024: { items: 6, itemsFit: "fill" },
};
const items = [
  <img
    src="../../carousel_1.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_2.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_3.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_4.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_5.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_6.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_7.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_8.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_9.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_10.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_11.jpg"
    onDragStart={handleDragStart}
    role="presentation"
  />,
  <img
    src="../../carousel_12.jpg"
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
          <div className={styles.line}></div>
          <div className={styles.area}>
            <ul className={styles.square}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <img
            className={styles.photo}
            src={"/background_home_10.png"}
            alt="frame"
          />

          <p className={styles.centered}>Elegant</p>
          <div className={styles.left}>
            <span>Краса не вимагає жертв, краса</span>
            <span> потребує уваги.</span>
            <p>Знайди час для себе</p>
          </div>
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
        <section className={styles.about}>
          <span className={styles.bigtext}>-Про нас-</span>
          <p className={styles.information}>
            Elegant - салон краси у Львові, де Вам допоможуть вдосконалити та
            підкреслити красу, подбати про волосся, нігті та мати неперевершений
            вигляд.
          </p>
          <p className={styles.information}>
            Кожна жінка приділяє увагу своєму зовнішньому вигляду: стрижка,
            укладка, або фарбування, манікюр та педикюр. Правильний догляд за
            волоссям чи нігтями неможливий в домашніх умовах і потребує
            професійного підходу.
          </p>
          <p className={styles.information}>
            Ми пропонуємо індивідуальний підхід до кожного клієнта у підборі
            стрижки. Змінимо колір Вашого волосся у той про який Ви завжди
            мріяли. Різноманітні процедури для відновлення волосся в тому числі
            після хімічної завивки чи фарбування в блонд.
            <span className={styles.information__computer}>
              Ваше волосся стане блискучим та пружним, без посічених кінчиків.
              Кожне пасмо буде захищене від ламкості, термічних і фізичних
              впливів.
            </span>
            Наша команда допоможе підібрати Вам відповідний догляд, який буде
            довго підтримувати отриманий результат.
          </p>
          <b className={styles.information}>
            Саме тому наші спеціалісти докладуть максимум зусиль, щоб Ви були
            задоволені ♥
          </b>
          <h3>Безпека</h3>
          <p className={styles.information}>
            100% гарантія стерилізації та дезінфекції
          </p>
          <h3>Досвід і професіоналізм</h3>
          <p className={styles.information}>Працюємо з 2005 року</p>
          <h3>Час</h3>
          <p className={styles.information}>
            Ми цінуємо Ваш час, тому є можливість зробити кілька процедур
            одночасно
          </p>
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
