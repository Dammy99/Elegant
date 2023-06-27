import React from "react";
import styles from "../../app/style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import TtyIcon from "@mui/icons-material/Tty";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { maptiler } from "pigeon-maps/providers";
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

const Contacts = () => {
  return (
    <div className={styles.contactspage}>
      <section className={styles.contactspage__info}>
        <InfoIcon sx={{ color: "#68a193" }} fontSize="large"></InfoIcon>
        <div className={styles.contactspage__contacts}>
          <b>Контакти:</b>
          <a href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%B8+%22%D0%95%D0%BB%D0%B5%D0%B3%D0%B0%D0%BD%D1%82%22/@49.8380862,24.0032829,18z/data=!4m6!3m5!1s0x473add82e482bbaf:0xe777db3a6c2faae2!8m2!3d49.838344!4d24.0039159!16s%2Fg%2F11b90fjsqt?entry=ttu">
            м. Львів, вул. Братів Міхновських 7
          </a>
        </div>

        <TtyIcon sx={{ color: "#68a193" }} fontSize="large"></TtyIcon>
        <div className={styles.contactspage__numbers}>
          <b>Телефонувати:</b>
          <span>Парні числа - + 38 (067) 999 99 99</span>
          <span>Непарні числа - + 38 (067) 999 99 99</span>
        </div>

        <TimelapseIcon
          sx={{ color: "#68a193" }}
          fontSize="large"
        ></TimelapseIcon>
        <div className={styles.contactspage__schedule}>
          <b>Ми працюємо:</b>
          <span>Пн-Сб: 10:00 - 19:00</span>
          <span>Нд: 10:00 - 15:00</span>
        </div>
        <div className={styles.social}></div>
      </section>
      <div className={styles.contactspage__map}>{GetLocation()}</div>
    </div>
  );
};

export default Contacts;
