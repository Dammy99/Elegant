import React, { useState } from "react";
import styles from "../../app/style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/LogoBackless.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const handleSetBurgerOpen = () => {
    setBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <div className={styles.leftside}>
          <p>
            <LocationOnIcon fontSize="small" />
            м. Львів, вул. Братів Міхновських 7
          </p>
          <div className={styles.numbers}>
            <LocalPhoneIcon fontSize="small" />
            <span>+ 38 (067) 999 99 99</span>
            <span>+ 38 (067) 999 99 99</span>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.rightside}>
          <p>
            Ми працюємо:
            <TimelapseIcon fontSize="small" />
          </p>
          <p>Пн-Сб: 10:00 - 19:00</p>
          <p>Нд: 10:00 - 15:00</p>
        </div>
      </section>
      <section className={styles.menu}>
        <div className={styles.navbar}>
          <div className={styles.links}>
            <ul>
              <li>
                <NavLink to="/" data-link-alt="Головна">
                  <span>Головна</span>
                </NavLink>
              </li>
              |
              <li style={{ display: "inherit" }}>
                <NavLink to="/services" data-link-alt="Послуги">
                  <span>Послуги</span>
                </NavLink>
                <IconButton sx={{ padding: "0" }}>
                  <ArrowDropDownIcon />
                </IconButton>
              </li>
              |
              <li>
                <NavLink to="/makeup" data-link-alt="Засоби для волосся">
                  <span>Засоби для волосся</span>
                </NavLink>
              </li>
              |
              <li>
                <NavLink to="/contacts" data-link-alt="Контакти">
                  <span>Контакти</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.cross}
          onClick={() => setBurgerOpen(!isBurgerOpen)}
        >
          <div></div>
        </div>
      </section>
      <section className={styles.hamburger}>
        <div className={styles.toogler}></div>
        <div className={styles.burger}>
          <div
            className={`${styles.navigation} ${
              isBurgerOpen ? styles.active : ""
            }`}
          >
            <div className={styles.navlinks}>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    data-link-alt="Головна"
                    onClick={handleSetBurgerOpen}
                  >
                    <span>Головна</span>
                  </NavLink>
                </li>
                <li style={{ display: "inherit" }}>
                  <NavLink
                    to="/services"
                    data-link-alt="Послуги"
                    onClick={handleSetBurgerOpen}
                  >
                    <span>Послуги</span>
                  </NavLink>
                  <IconButton sx={{ padding: "0" }}>
                    <ArrowDropDownIcon />
                  </IconButton>
                </li>
                <li>
                  <NavLink
                    to="/makeup"
                    data-link-alt="Засоби для волосся"
                    onClick={handleSetBurgerOpen}
                  >
                    <span>Засоби для волосся</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contacts"
                    data-link-alt="Контакти"
                    onClick={handleSetBurgerOpen}
                  >
                    <span>Контакти</span>
                  </NavLink>
                </li>
                <li>
                  <p>
                    <LocationOnIcon fontSize="small" />
                    м. Львів, вул. Братів Міхновських 7
                  </p>
                  <div className={styles.numbers}>
                    <LocalPhoneIcon fontSize="small" />
                    <span>+ 38 (067) 999 99 99</span>
                    <p>+ 38 (067) 999 99 99</p>
                    <p>
                      Ми працюємо:
                      <TimelapseIcon fontSize="small" />
                    </p>
                    <p>Пн-Сб: 10:00 - 19:00</p>
                    <p>Нд: 10:00 - 15:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={styles.cross}
            onClick={() => setBurgerOpen(!isBurgerOpen)}
          >
            <div></div>
          </div>
        </div>

        <div className={styles.overlay}></div>
      </section>
    </div>
  );
};

export default Header;
