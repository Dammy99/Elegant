import React, { useState } from "react";
import styles from "../../app/style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/LogoBackless.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownMobileOpen, setDropdownMobileOpen] = useState(false);

  const [height, setHeight] = useState(0);
  const handleSetHeight = () => {
    if (height == 0) {
      setHeight(300);
    } else {
      setHeight(0);
    }
  };

  const handleSetBurgerOpen = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  const handleDropdownOpen = (): void => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownMobileOpen = (): void => {
    setDropdownMobileOpen(!isDropdownMobileOpen);
  };

  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <div className={styles.leftside}>
          <a href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%B8+%22%D0%95%D0%BB%D0%B5%D0%B3%D0%B0%D0%BD%D1%82%22/@49.8380862,24.0032829,18z/data=!4m6!3m5!1s0x473add82e482bbaf:0xe777db3a6c2faae2!8m2!3d49.838344!4d24.0039159!16s%2Fg%2F11b90fjsqt?entry=ttu">
            <p>
              <LocationOnIcon fontSize="small" />
              м. Львів, вул. Братів Міхновських 7
            </p>
          </a>

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
        <div className={styles.links}>
          <ul>
            <li>
              <NavLink to="/" data-link-alt="Головна">
                <span>Головна</span>
              </NavLink>
            </li>
            |
            <li
              style={{ display: "inherit" }}
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownOpen}
            >
              <NavLink to="/services" data-link-alt="Послуги">
                <span>Послуги</span>
              </NavLink>
              <IconButton sx={{ padding: "0" }}>
                <ArrowDropDownIcon />
                {isDropdownOpen && <Dropdown setState={handleDropdownOpen} />}
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
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <NavLink
                      to="/services"
                      data-link-alt="Послуги"
                      onClick={handleSetBurgerOpen}
                    >
                      <span>Послуги</span>
                    </NavLink>
                    <IconButton
                      sx={{ padding: "0" }}
                      onClick={() => {
                        handleSetHeight();
                      }}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  </div>
                  <div>
                    <Dropdown
                      setState={handleDropdownMobileOpen}
                      closeBurger={handleSetBurgerOpen}
                      heigth1={height}
                    />
                  </div>
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
                  <a
                    className={styles.location}
                    href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%B8+%22%D0%95%D0%BB%D0%B5%D0%B3%D0%B0%D0%BD%D1%82%22/@49.8380862,24.0032829,18z/data=!4m6!3m5!1s0x473add82e482bbaf:0xe777db3a6c2faae2!8m2!3d49.838344!4d24.0039159!16s%2Fg%2F11b90fjsqt?entry=ttu"
                  >
                    <p>
                      <LocationOnIcon fontSize="small" />
                      м. Львів, вул. Братів Міхновських 7
                    </p>
                  </a>
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
